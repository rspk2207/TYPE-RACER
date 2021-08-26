document.getElementById('check').addEventListener("click",function(){
const result = document.getElementById('result');
const count = parseInt(window.localStorage.getItem("count"));
var found = 0;
for(let i=1;i<=count;i++)
{
    let name = window.localStorage.getItem("user"+i);
    let search = document.querySelector('#username').value;
    if(name == search)
    {
        found = i;
    }
}
if(found>0)
{
    const acc = window.localStorage.getItem("acc"+found);
    const wpm = window.localStorage.getItem("wpm"+found);
    result.innerText = "YOUR HIGHEST SPEED IS "+wpm+" WPM AND HIGHEST ACCURACY IS "+acc+" %";
}
else
{
    result.innerText = "NO RECORDS FOUND WITH RESPECT TO THE NAME PROVIDED";
}
})