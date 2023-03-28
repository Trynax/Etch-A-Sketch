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


function pixelated() {
   let grids = document.querySelectorAll('.grid')
   for (let grid of grids){
      grid.addEventListener('mouseenter', function (){
         this.style.backgroundColor=`${colorChoice}`
      })
   }   

}
   
function reset() {
   let grids = document.querySelectorAll('.grid')
   for(let i=0; i<TgridSize; i++){
      grids[i].style.backgroundColor='white'
   }
}

 function selectGridSize(){
   gridSize = parseInt(prompt("Select grid size,less than 100", 10))
   TgridSize= gridSize*gridSize
  gridsContainer.innerHTML="";
   gridsContainer.style.cssText=`grid-template-columns: repeat(${gridSize},1fr);grid-template-rows: repeat(${gridSize},1fr);`
  createGrid()
  pixelated()
 }

 let colorInput = document.getElementById('change')
 colorInput.addEventListener('input', function(){
   colorChoice=colorInput.value
 })

 pixelated()