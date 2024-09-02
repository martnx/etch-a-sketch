const container = document.querySelector(".container");
let size = 20;
//Row and column loops
for(let i = 0; i < size; i++){
    console.log(i);
    var row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    //Column
    for(let j = 0; j < size; j++){
        var column = document.createElement('div');
        column.className = 'column';
        row.appendChild(column);  
    }
}   

//Make eventlistener for each column
container.addEventListener("mouseover", e =>{
    const target  = e.target;
    if(e.target.matches(".column")){
        target.style.backgroundColor = "black";
    }

    //hold the shift to clear the div
    if(e.shiftKey)target.setAttribute("style", "background: rgb(189, 189, 189);");
    
});

//Resetting all the colored div
const resetButton = document.querySelector('.reset-btn');
const allColumn = document.querySelectorAll(".column");
resetButton.addEventListener("click", () =>{
    column.style.backgroundColor = "blue";
    for(const columns of allColumn){
        columns.style.backgroundColor = "rgb(189, 189, 189)";
    }
});




