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
        let col = document.createElement("td");
        col.onclick = function(){ this.style.backgroundColor = colorSelected; };
        row.appendChild(col); 
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
        let col = document.createElement("td");
        col.onclick = function(){ this.style.backgroundColor = colorSelected; };
        allRows[i].appendChild(col);
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
    if (numCols === 1) grid.innerHTML = '';

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
        // get the grid 
        let grid = document.getElementById("grid");
    
        //for every row and column
        for (let row of grid.rows) 
        {
            for(let cell of row.cells) 
            {
                // fill in the cells that are empty with colorSelected
                if(cell.style.backgroundColor === "")
                    cell.style.backgroundColor = colorSelected;
            }
        }
}

// Fill all cells
function fillAll(){
    // get the grid 
    let grid = document.getElementById("grid");

    // for every row and column
    for (let row of grid.rows) 
    {
        for(let cell of row.cells) 
        {
            // fill the cell with the selected color
           cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    // get the grid 
    let grid = document.getElementById("grid");
    
    // for every row and column
    for (let row of grid.rows) 
    {
        for(let cell of row.cells) 
        {
            // clear the cell color
           cell.style.backgroundColor = "";
        }
    }
}