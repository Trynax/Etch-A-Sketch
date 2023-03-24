let color =  document.getElementById('color');
let colorChoice = color.value
let height = 55;
let Agrid = document.createElement('div')
document.body.appendChild(Agrid)
Agrid.classList.add('Agrid')
let gridSize = height
console.log(gridSize);
Agrid.style.cssText= 'display: grid; border: 2px solid black; heigth:500px;width:500px;'

let containerWidth = Agrid.offsetWidth;
let containerHeight = Agrid.offsetHeight
let totalAreaOfAgrid = containerHeight*containerWidth
let totalGridSize = gridSize*gridSize;
let amountCreadted = Math.floor(totalAreaOfAgrid/totalGridSize);
for (let i=0; i<100; i++){
  let grid = document.createElement('div')
  grid.classList.add('grid')
  grid.style.cssText= `height:${gridSize}px; width:${gridSize}px;border: 0.2px solid gray;`
Agrid.appendChild(grid)
console.log(grid.style.height);

}

let grids = document.querySelectorAll('.grid');
let lastGrid;

for(let grid of grids){
  grid.addEventListener('mouseenter', function () {
    this.style.backgroundColor = colorChoice;
  })
  
}


function reset() {
  let grids = document.querySelectorAll('.grid')
  for(let i=0; i<grids.length; i++){
    grids[i].style.backgroundColor='white'
  }
}
function selectGridSize(){
  gridSize = parseInt(prompt("what's your height?", 66)); 
  console.log(gridSize);
  let grids = document.querySelectorAll('.grid');
  for(let i=0; i<grids.length; i++){
    grids[i].style.height = `${gridSize}px`;
    grids[i].style.width = `${gridSize}px`;
    grids[i].style.backgroundColor = `white`;
  }
  
  Agrid.style.gridTemplateRows =`repeat(${numRows},${gridSize}px)`;
  Agrid.style.gridTemplateColumns =`repeat(${numCols},${gridSize}px)`;
}
