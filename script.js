const container = document.querySelector(".container");

// let size = 16;
//Row and column loops
function createGrid(size){

    for(let i = 1; i < size; i++){
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

//code for button here
const changeButton = document.querySelector(".change-btn");
changeButton.addEventListener("click", () => {
    const inputSize = document.querySelector(".input-size").value;
    console.log(inputSize);
    // createGrid(inputSize);
});

//Resetting all the colored div
const resetButton = document.querySelector('.reset-btn');
const allColumn = document.querySelectorAll(".column");
resetButton.addEventListener("click", () =>{
    for(const columns of allColumn){
        columns.style.backgroundColor = "rgb(189, 189, 189)";
    }
});

//Alert checkpoint
function alertInput() {
    const inputSize = window.prompt("What size of pad? 1 - 100 only");
    if(inputSize < 101){
        createGrid(inputSize);
    }
    else{
    alertInput();
    }
};
alertInput();




// inputBtn.addEventListener("click", () =>{
//     const inputValue = document.querySelector(".input-size");
//     size = inputValue.value;
//     console.log(size);
// });

// $(".input-btn").click(function() {
//     console.log("JQuery is clicked!");
// });



