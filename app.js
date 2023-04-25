let input = document.querySelector("input");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let result = document.querySelector(".all");
let number = document.querySelector("#nm");
var globalRm;
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
    newDiv.className = "todos";
    newDiv.appendChild(cross);
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
        {
            result.style.display = "flex";
        }
    }
};
cross.onclick = function (){
    newDiv.remove();
};
    i++;
    number.innerHTML = i;
}

// if (i != 0)
// {
    
// }    
