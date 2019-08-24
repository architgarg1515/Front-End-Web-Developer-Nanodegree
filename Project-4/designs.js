// Select color input
let color;
let table = document.getElementById("pixelCanvas");
table.addEventListener('click', function() {
    color = document.getElementById("colorPicker").value;
    event.target.style.removeProperty("background-color");
    event.target.style.background = color;
});

// Select size input
let height, width;
const submit = document.getElementById("sizePicker");
submit.addEventListener('submit', function(event) {
    event.preventDefault();
    if (table.firstChild) {
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
    }
    height = document.getElementById("inputHeight").value;
    width = document.getElementById("inputWidth").value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});


function makeGrid(height, width) {
    for (let i = 1; i <= height; i++) {
        let x = document.createElement("tr");
        x.setAttribute("id", "table-row" + i);
        table.appendChild(x);
        for (let j = 1; j <= width; j++) {
            let y = document.createElement("td");
            y.setAttribute("id", "table-column" + j);
            x.appendChild(y);
        }
    }

}


const clr = document.getElementById('myBtn1');
clr.addEventListener('click', function (event) {
    event.preventDefault();
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
})

const reset = document.getElementById('myBtn2');
reset.addEventListener('click', function (event) {
    event.preventDefault();
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    table.style.background = null;
    makeGrid(height, width);
})
