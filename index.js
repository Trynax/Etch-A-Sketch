let gridsContainer = document.createElement('div')
document.body.appendChild(gridsContainer)
let gridSize = 16;
let colorChoice = '#000000'
let TgridSize = gridSize*gridSize;
gridsContainer.classList.add('container')
gridsContainer.style.cssText=`grid-template-columns: repeat(${gridSize},1fr);grid-template-rows: repeat(${gridSize},1fr);`
function createGrid() {

   for(let i = 0; i<TgridSize; i++){
      let grid = document.createElement("div")
      gridsContainer.appendChild(grid)
      grid.classList.add('grid')
   
   }
}
createGrid()
   let grids = document.querySelectorAll('.grid')
   for (let grid of grids){
      grid.addEventListener('mouseenter', function (){
         grid.style.backgroundColor=`${colorChoice}`
      })
   }   

function reset() {
   let grids = document.querySelectorAll('.grid')
   for(let i=0; i<TgridSize; i++){
      grids[i].style.backgroundColor='white'
   }
}

 function selectGridSize(){
   gridSize = parseInt(prompt("Enter a new grid size between 1 and 100 units:", 10))
   if(gridSize>100){
      gridSize =null;
   }
   TgridSize= gridSize*gridSize
  gridsContainer.innerHTML="";
   gridsContainer.style.cssText=`grid-template-columns: repeat(${gridSize},1fr);grid-template-rows: repeat(${gridSize},1fr);`
  
   createGrid()
   let grids = document.querySelectorAll('.grid')
   for (let grid of grids){
      grid.addEventListener('mouseenter', function (){
         grid.style.backgroundColor=`${colorChoice}`
      })
   }   
 }

 let colorInput = document.getElementById('change')
 colorInput.addEventListener('input', function(){
   colorChoice=colorInput.value
 })

 