// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // get the grid 
    let grid = document.getElementById("grid");

    // create a new row 
    let row = document.createElement("tr");

    // add appropriate columns
    if (numCols === 0) numCols++;
    for (let i = 0; i < numCols; i++) {
        row.appendChild(document.createElement("td"));
    }

    // add created row
    grid.appendChild(row);

    // increment rows
    numRows++;
}

// Add a column
function addC() {
    // get the grid 
    let grid = document.getElementById("grid");

    // get all rows
    let allRows = document.querySelectorAll("tr");

    // add a column
    for (let i = 0; i < numRows; i++) {
        allRows[i].appendChild(document.createElement("td"));
    }
    
    // if there were no rows, add a row
    if (numRows === 0) {
        addR();
        numCols--;
    } 

    // increment cols
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}