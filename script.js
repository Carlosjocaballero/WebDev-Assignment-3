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
    // if there were no rows, add a row
    if (numRows === 0) {
        addR();
        return;
    } 

    // get all rows
    let allRows = document.getElementById("grid").querySelectorAll("tr");

    // add a column
    for (let i = 0; i < numRows; i++) {
        allRows[i].appendChild(document.createElement("td"));
    }

    // increment cols
    numCols++;    
}

// Remove a row
function removeR() {
    // ignore empty table
    if (numRows === 0) return;

    // get the grid 
    let grid = document.getElementById("grid");

    // get all rows and remove last one
    let allRows = grid.querySelectorAll("tr");
    grid.removeChild(allRows[allRows.length - 1]);

    // decrement rows
    numRows--;
    if (numRows === 0) numCols = 0;
}

// Remove a column
function removeC() {
    // ignore empty table
    if (numCols === 0) return;

    // get the grid 
    let grid = document.getElementById("grid");

    // get all rows and remove last one
    let allRows = grid.querySelectorAll("tr");


    // remove all rows if one column
    if (numCols === 1) {
        numRows++;
        for (let i = numRows; i > 0; i++) {
            removeR();
        }
    }

    // remove one column from each row
    for (let i = 0; i < numRows; i++) {
        allRows[i].removeChild(allRows[i].lastChild);
    }

    // decrement cols
    numCols--;
    if (numCols === 0) numRows = 0;
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