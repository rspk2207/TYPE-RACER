const quoteUrl = 'https://api.quotable.io/random';
const disp = document.getElementById('disp');
const qinput = document.getElementById('input');
const time = document.getElementById('timer');
const position = parseInt(window.localStorage.getItem("position"));
const highwpm = parseInt(window.localStorage.getItem("wpm"+position));
const highacc = parseInt(window.localStorage.getItem("acc"+position));
var count = 0;
var totalLetters = 0;
var wrongLetters = 0;
qinput.addEventListener('input',()=>{
    var arr = disp.querySelectorAll('span');
    var arrinp = qinput.value.split('');
    let correct = true;
    arr.forEach((colorspan, index)=>{
        const character = arrinp[index];
        totalLetters++;
        if((character == null))
        {
            colorspan.classList.remove('correct');
            colorspan.classList.remove('wrong');
            correct = false
        }
        else if(character == colorspan.innerText)
        {
            colorspan.classList.add('correct');
            colorspan.classList.remove('wrong');
        }
        else
        {
            wrongLetters++;
            colorspan.classList.add('wrong');
            colorspan.classList.remove('correct');
            correct = false
        }
    })
    if(correct)
    {
        console.log("won");
        if(highacc<parseInt((100*(totalLetters-2*(wrongLetters))/totalLetters)))
        {
            window.localStorage.setItem("acc"+position,parseInt((100*(totalLetters-2*(wrongLetters))/totalLetters)));
        }
        if(highwpm<parseInt(words*60/count))
        {
            window.localStorage.setItem("wpm"+position,parseInt(words*60/count));
        }
        document.getElementById('score').innerText = "YOU DID A GOOD JOB!! YOUR SPEED IS "+parseInt(words*60/count)+" WPM AND YOUR ACCURACY IS "+parseInt((100*(totalLetters-2*(wrongLetters))/totalLetters))+" %";
        document.getElementById('win').style.display = "block";
        clearInterval(seconds);
        document.getElementById('pack').style.display = "none";
    }
})
const randomQuote = async ()=>{
    const res = await fetch(quoteUrl);
    const data = await res.json();
    return data.content;
}
const quote = randomQuote();
async function getQuote()
{
    const quote = await randomQuote();
    words = quote.split(' ').length;
    disp.innerText = '';
    console.log(quote);
    quote.split('').forEach(element => {
    const colorspan = document.createElement('span');
    colorspan.innerText = element;
    disp.appendChild(colorspan);
    });
}
document.getElementById("playAgain").addEventListener("click",()=>{
history.go(0);
});
/*
const words = ("hello my name is goat").split(' ').length;
function getQuote()
{
    const quote = "hello my name is goat";
    disp.innerText = ''
    console.log(quote)
    quote.split('').forEach(element => {
    const colorspan = document.createElement('span')
    colorspan.innerText = element
    disp.appendChild(colorspan)
    });
}
*/
var seconds = setInterval(()=>{
time.innerText = count;
count++;  
},1000)
getQuote();