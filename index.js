const { stdin: input, stdout: output } = require("node:process");
const readline = require("node:readline");

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const coordinates = ["A", "B", "C"];

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
  rl.question(" \n Enter coordinates: ", (answer) => {
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
  grid[letter][number - 1] = 1;
}
function checkWinCondition() {
  // Check rows
  for (let i = 0; i < grid.length; i++) {
    if (checkMatchingTiles(grid[i])) {
      console.log("X Wins!");
      process.exit();
    }
  }
  // Check columns
  // check diagonals
}

function checkMatchingTiles(array) {
  if (array[0] === array[1] && array[1] === array[2] && array[0] !== 0) {
    return true;
  } else {
    return false;
  }
}

gameLoop();
