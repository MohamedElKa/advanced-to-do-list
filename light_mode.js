let body = document.querySelector("body");
let list_t = document.querySelector(".list");
let img = document.querySelector("img");
let state = false;

function changeMode(){
    if (state == false)
    {
        body.style.backgroundColor = "white";
        img.setAttribute("src", "./images/icon-moon.svg")
        state = true;
    }
    else
    {
        body.style.backgroundColor = "hsl(235, 21%, 11%)";
        img.setAttribute("src", "./images/icon-sun.svg")
        state = false;
    }
}