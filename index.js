document.getElementById("lessgo").addEventListener("click",function(){go();});
document.getElementById("dashboard").addEventListener("click",function(){godash();});
function go(){
let counter = window.localStorage.getItem("count");
console.log(counter);
let position = window.localStorage.getItem("position");
if(!counter)
{
    counter = 0;
    console.log(counter);
}
if((position === null)||(position == "null"))
{
    position = 0;
}
counter++;
position++;
let repeat = 0;
let lessgo = document.querySelector("#username").value;
for(let i=1;i<=counter;i++)
{
    if(lessgo == window.localStorage.getItem("user"+i))
    {
        repeat = 1;
        position = i;
    }
}
if(repeat != 1)
{
position = counter;
window.localStorage.setItem("user" + counter, lessgo);
window.localStorage.setItem("count",counter);
window.localStorage.setItem("wpm"+counter,0);
window.localStorage.setItem("acc"+counter,0);
}
window.localStorage.setItem("position",position);
location.href = "game.html";
}
function godash(){
    location.href = "dashboard.html";
}