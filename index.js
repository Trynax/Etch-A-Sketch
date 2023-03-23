let height = 55;
let Agrid = document.createElement('div')
let gridSize = height
document.body.appendChild(Agrid)
Agrid.classList.add('Agrid')
console.log(gridSize);
Agrid.style.cssText= 'display: grid; border: 2px solid black;'

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
    this.style.backgroundColor ='black';
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
  let containerWidth = Agrid.offsetWidth;
  let containerHeight = Agrid.offsetHeight
  let numRows = Math.floor(containerHeight/gridSize);
  let numCols = Math.floor(containerWidth/gridSize);
  Agrid.style.gridTemplateRows =`repeat(${numRows},${gridSize}px)`;
  Agrid.style.gridTemplateColumns =`repeat(${numCols},${gridSize}px)`;
}
