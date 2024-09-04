const container = document.querySelector(".container");
createGrid();


// pickColorRadio.addEventListener("click", e =>{
//     console.log("radioPickColor is clicked!");
//     createGrid();
// });

const randomColorRadio = document.querySelector("#randomRadio");


//I will actionlistener on form here
const formContainer = document.querySelector(".switchColor-container");
const prefColor = document.querySelector(".chooseColor");
prefColor.addEventListener("input", e => { //Get the value of input color
    // createGrid();
    console.log(prefColor.value);
    pickColorRadio.checked = true;
});
formContainer.addEventListener("click", e =>{
    let target = e.target
    console.log(target.id);
    switch(target.id){
        case 'pickColorRadio':
            console.log("pick color radio is clicked using switch statement");
              


            break;
    }
    createGrid();
});

//Main variable of color
let returnValue = "#000000";

//Color Form
const pickColorRadio = document.querySelector("#pickColorRadio");

// prefColor.addEventListener("click", e =>{
//     // createGrid();
// })



//Alert checkpoint
// function alertInput() {
//     const inputSize = window.prompt("What size of pad? 1 - 100 only", 16);
//     if(inputSize < 101){
//         createGrid(inputSize);
//     }
//     else{
//     alertInput();
//     }
// };
// alertInput();
// let size = 16;
//Row and column loops
function createGrid(size = 16){
    //Remove all the grid first before making the grid
    const selectRow = document.querySelectorAll(".row")
    for(const allRow of selectRow){
        container.removeChild(allRow);
    }
    
    //Start making the grid here
    for(let i = 1; i <= size; i++){
        var row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        //Column
        for(let j = 1; j <= size; j++){
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
        target.style.backgroundColor = returnValue;
    }
    //hold the shift to clear the div
    if(e.shiftKey)target.setAttribute("style", "background: rgb(189, 189, 189);");
    
});

//code for button here
const changeButton = document.querySelector(".change-btn");
changeButton.addEventListener("click", () => {
    const inputSize = document.querySelector(".input-size").value;
    createGrid(inputSize);
});

//Resetting all the colored div
const resetButton = document.querySelector('.reset-btn');
const allColumn = document.querySelectorAll(".column");
resetButton.addEventListener("click", () =>{
    for(const columns of allColumn){
        columns.style.backgroundColor = "rgb(198, 198, 198)";
    }
});

//Input text code
const inputText = document.querySelector("input-size");
const inputBtn = document.querySelector(".change-btn");
inputBtn.addEventListener("click", () =>{

    //Getting the input value
    const inputValue = document.querySelector(".input-size").value;
    //Checking if the value is valid 1 - 100 only!
    if(inputValue > 0 && inputValue <= 100){
        createGrid(inputValue);
    }else{
        alert("Input valid value!");
        createGrid();
    }
});


