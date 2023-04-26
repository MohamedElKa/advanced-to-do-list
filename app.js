let input = document.querySelector("input");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let result = document.querySelector(".all");
let number = document.querySelector("#nm");
let clear = document.querySelector(".clear");
let but_t = document.querySelector(".mod");
var globalRm;
let state = false;
let i = 0;
let completed = 0;

function addTodo(){
    let value = input.value;
    let newDiv = document.createElement("div");
    let text = document.createTextNode(value);
    let p = document.createElement("p");
    let button = document.createElement("button");
    var cross = document.createElement("img");
    newDiv.appendChild(button);
    p.appendChild(text);
    cross.setAttribute("src", "./images/icon-cross.svg")
    cross.className = "cross";
    newDiv.appendChild(p);
    newDiv.className = `todos`;
    newDiv.appendChild(cross);
    if (state == false)
    {
        newDiv.style.backgroundColor = "hsl(235, 19%, 35%)";
        newDiv.style.color = "hsl(0, 0%, 98%)";

    }
    else
    {
        newDiv.style.backgroundColor = "hsl(0, 0%, 98%)";
        newDiv.style.color = "hsl(235, 19%, 35%)";
    }
    p.className = `check${i}`;
    globalRm = document.querySelector(".cross");
    list.insertBefore(newDiv, list.children[0]);
    let par = document.querySelector(`.check${i}`);
    button.onclick = function (){
        if (par.style.textDecoration == "line-through")
        {
            par.style.textDecoration = "none";
            button.style.backgroundImage = "none";
            completed--;
            result.style.display = "none";
        }
        else
        {
            par.style.textDecoration = "line-through";
            button.style.backgroundImage = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
            completed++;
            if (completed == i)
                result.style.display = "flex";
        }
    };
    i++;
    cross.onclick = function (){
        newDiv.remove();
        i--;
        number.innerHTML = i;
    };
    number.innerHTML = i;
}


clear.addEventListener("click", function (){
    var x = document.querySelectorAll(".todos"); 
    x.forEach(e =>{
        e.remove();
    })
    number.innerHTML = 0;
})



but_t.addEventListener("click", function changeMode(){
    if (state == false)
    {
        var x = document.querySelectorAll(".todos"); 
        x.forEach(e =>{
            e.style.color = "black";
            e.style.backgroundColor = "hsl(0, 0%, 98%)";
        })
        input_t.style.backgroundColor = "hsl(0, 0%, 98%)";
        inputItself.style.color = "black";
        body.style.backgroundColor = "hsl(236, 33%, 92%)";
        info.style.backgroundColor = "hsl(0, 0%, 98%)";
        list_t.style.backgroundColor = "hsl(0, 0%, 98%)";
        info.style.color = "black";
        img.setAttribute("src", "./images/icon-moon.svg")
        state = true;
    }
    else
    {
        var x = document.querySelectorAll(".todos"); 
        x.forEach(e =>{
            e.style.color = "white";
            e.style.backgroundColor = "hsl(235, 19%, 35%)";
        })
        input_t.style.backgroundColor = "hsl(235, 19%, 35%)";
        inputItself.style.color = "white";
        body.style.backgroundColor = "hsl(235, 21%, 11%)";
        info.style.backgroundColor = "hsl(235, 19%, 35%)";
        list_t.style.backgroundColor = "hsl(0, 0%, 98%)";
        info.style.color = "white";
        img.setAttribute("src", "./images/icon-moon.svg")
        state = false;
    }
});
// if (i != 0)
// {
    
// }    
