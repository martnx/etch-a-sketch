const container = document.querySelector(".container");


//Create variable that it creates div with style of line 
//I need 16x16 grid

//The style can be change on style.css sheets

let grid = 16;
let gridReturn = grid * grid;

for(let i = 0; i < 40; i++){
    const createDiv = document.createElement("div");
    createDiv.className = "div-col";
    container.appendChild(createDiv);
}

console.log(gridReturn);
