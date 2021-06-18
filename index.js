function painting() {
  this.style.backgroundColor = "black";
}
function clear() {
  while (mainBoard.firstChild) {
    mainBoard.removeChild(mainBoard.firstChild);
  }
  makeBoard();
}

function setSize(e) {
  let value = e.target.value;

  document.querySelector(".range-value").textContent = `Pixel Size ${value}`;
  while (mainBoard.firstChild) {
    mainBoard.removeChild(mainBoard.firstChild);
  }
  boardSize = value;

  mainBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
  mainBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  makeBoard();
}
let boardSize = 32;

let clearbtn = document.querySelector(".clear");
clearbtn.addEventListener("click", clear);
let mainBoard = document.querySelector(".main-board");

function makeBoard() {
  mainBoard.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
  mainBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  for (i = 0; i < boardSize * boardSize; i++) {
    mainBoard.appendChild(document.createElement("div"));
  }
  let cells = document.querySelectorAll(".main-board div");
  let cellsArray = [...cells];
  for (i = 0; i < boardSize * boardSize; i++) {
    cellsArray[i].classList.add("cell");
    cellsArray[i].classList.add(`cell[${i}]`);
  }
  for (i = 0; i < boardSize * boardSize; i++) {
    cellsArray[i].addEventListener("mouseover", painting);
  }
  let rangeInput = document.querySelector(".range-input");
  rangeInput.addEventListener("change", setSize);
}
makeBoard();
let rangeInput = document.querySelector(".range-input");
rangeInput.addEventListener("change", setSize);
