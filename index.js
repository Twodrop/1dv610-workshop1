const { count } = require("node:console");
const { stdin: input, stdout: output } = require("node:process");
const readline = require("node:readline");

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const coordinates = ["A", "B", "C"];

const player = 0;

function printGrid(grid) {
  console.log(" \n  1 2 3");
  for (let i = 0; i < grid.length; i++) {
    let row = "";
    row += coordinates[i] + " ";
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        row += "0 ";
      }
      if (grid[i][j] === 1) {
        row += "X ";
      }
      if (grid[i][j] === 2) {
        row += "O ";
      }
    }

    console.log(row);
  }
}
printGrid(grid);
// Input logic

function gameLoop() {
  const rl = readline.createInterface({ input, output });
  rl.question(" \n Player 1, Enter coordinates: ", (answer) => {
    const input = answer.toUpperCase().split("");
    placeTile(input);
    printGrid(grid);
    rl.close();
    checkWinCondition();
    gameLoop();
  });
}

function placeTile(input) {


  const letter = coordinates.indexOf(input[0]);
  const number = parseInt(input[1]);
  console.log(letter)
  console.log(number)

    if (letter === undefined || number === undefined || isNaN(number)) {
        console.log("Incorrect input")
        return
    }

  if (grid[letter][number - 1] !== 0) {
    console.log("This tile is already full");
    return;
  }
  grid[letter][number - 1] = 1;
}
function checkWinCondition() {
  // Check rows
  for (let i = 0; i < grid.length; i++) {
    checkMatchingTiles(grid[i]);
  }
  // Check columns
  for (let i = 0; i < grid.length; i++) {
    let one = grid[0][i];
    let two = grid[1][i];
    let three = grid[2][i];
    let array = [one, two, three];
    checkMatchingTiles(array);
  }

  // check diagonals
  for (let i = 0; i < 2; i++) {
    let one = grid[0][0];
    let two = grid[1][1];
    let three = grid[2][2];
    let array = [one, two, three];
    checkMatchingTiles(array);
  }
  for (let i = 0; i < 2; i++) {
    let one = grid[0][2];
    let two = grid[1][1];
    let three = grid[2][0];
    let array = [one, two, three];
    checkMatchingTiles(array);
  }

  let countZeros = 0
  for (let i = 0; i < grid.length; i++) {
    for (let y = 0; y < grid[i].length; y++) {
      if (grid[i][y] === 0) {
        countZeros++
      }
    }
  }

  if (countZeros === 0) {
    console.log("Its a draw")
    process.exit();
  }
}


let värde1 = [0][0]


[0, 0, 0];
function checkMatchingTiles(array) {
  if (array[0] === array[1] && array[1] === array[2] && array[0] !== 0) {
    console.log("X Wins!");
    process.exit();
  } else {
    return false;
  }
}



function init() {
    
}

init()
