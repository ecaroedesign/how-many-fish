const generateFish = document.getElementById("generate")
const displayFish = document.getElementById("fish-field")
const clearFish = document.getElementById("clear-num")



function generateNum(){
  return Math.floor( Math.random() * 100)
}

function findFish(){
  let fishTotal = generateNum()
  displayFish.textContent = fishTotal
}

generateFish.addEventListener('click', findFish)


function tryAgain() {
  let fishTotal = 0
  displayFish.textContent = ""
}

clearFish.addEventListener('click', tryAgain)
