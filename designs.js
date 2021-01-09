// Select color input
let inputColor = document.getElementById ("colorPicker");

// Select size input
let table = document.getElementById("pixelCanvas");
let iHeight = document.getElementById ("inputHeight");
let iWidth = document.getElementById ("inputWidth");


// Make the grid
let sPicker = document.getElementById("sizePicker");
sPicker.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid()
});


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const height = iHeight.value;
  const width = iWidth.value;
  for (var w = 0; w < width; w++){
    const row = table.insertRow();
    for (var h = 0; h < height; h++){
      const cell = row.insertCell();
    }
  }
  let cPicker = document.getElementsByClassName("cell");
  cPicker.addEventListener("click", function (event) {
    event.preventDefault();
    cell.style.backgroundColor = inputColor;
    document.appendChild("cell");
    table.innerHTML = grid;
  });
}
