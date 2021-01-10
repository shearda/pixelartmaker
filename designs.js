// Select color input
let inputColor = document.getElementById ("colorPicker");

// Select size input
let tableCanvas = document.getElementById("pixelCanvas");
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
  let table = document.createElement('table')

  const height = iHeight.value;
  const width = iWidth.value;
  for (var w = 0; w < width; w++){
    const row = table.insertRow();
    for (var h = 0; h < height; h++){
      const cell = row.insertCell();
      cell.addEventListener("click", event=>{
        event.preventDefault();
        event.target.style.backgroundColor = inputColor.value;
      })
    }
  }
  let children = tableCanvas.childNodes? tableCanvas.childNodes: []
  if(children && children.length == 1){
    tableCanvas.replaceChild(table, children[0])
  }else{
    tableCanvas.append(table)
  }
}



