// inputs
const tlRange = document.getElementById('left-top'),
      trRange  = document.getElementById('right-top'),
      blRange  = document.getElementById('left-bot'),
      brRange  = document.getElementById('right-bot')

//inputs results
const tlResult = document.getElementById('result-tl'),
      trResult = document.getElementById('result-tr'),
      blResult = document.getElementById('result-bl'),
      brResult = document.getElementById('result-br')
      
const input = document.querySelectorAll('.input')
const cube = document.querySelector('.cube')

const total = document.getElementById('totalResult')
const btn = document.getElementById('btn')

const widthInput = document.getElementById('width')
const heightInput = document.getElementById('height')

const changeRadius = () => {
    tlResult.innerHTML = tlRange.value
    trResult.innerHTML = trRange.value
    blResult.innerHTML = blRange.value
    brResult.innerHTML = brRange.value

    cube.style.borderRadius = tlRange.value + 'px ' + trRange.value + 'px '  + brRange.value + 'px '  + blRange.value + 'px'
}

const changeSize = (e) =>{ 
    cube.style.width = widthInput.value + 'px'
    cube.style.height = heightInput.value + 'px'
    
}



const totalResult = () => {
    total.innerHTML = tlRange.value + ' ' + trRange.value + ' '  + brRange.value + ' '  + blRange.value + ' '
}

for(node of input){
    node.addEventListener('input', changeRadius)
}



widthInput.addEventListener('input', changeSize)
heightInput.addEventListener('input', changeSize)
console.log('input');



btn.addEventListener('click', totalResult)
