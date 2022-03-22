const grid =document.querySelector('.grid')

//draw a block
function addBlock(){
const block=document.createElement('div')
block.classList('block')
grid.style.left='100px'
grid.style.bottom='50px'
grid.appendChild(block)
}

