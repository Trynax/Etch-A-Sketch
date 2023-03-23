let height = parseInt(prompt("what's your heigth?")) 
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