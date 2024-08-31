const container = document.querySelector(".container");
let size = 64;
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
container.addEventListener("mousemove", e =>{
    const target  = e.target;
    console.log(e.target);
    target.setAttribute("style", "background: black;");
});

const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener("click", () =>{
    column.forEach(element => {
        column.setAttribute("style", "background-color: red");
    console.log("click");
    });
    
});