var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n");
var [pool, ...rawBoards] = input;
var boards = [];
var draw = poo.splice(0, 5);
var boardIndex = -1;
var rowIndex = 0;
var play = true;
var score = 0;

pool = pool.split(',').map((n) => parseInt(n));

rawBoards.forEach((line) => {
  if (line === '') {
    // console.log('CREATE A BOARD');
    let nextBoard = Array.from(Array(5), () => new Array(5));
    
    boards.push(nextBoard);
    boardIndex++;
    rowIndex = 0;
  } else {
    let columns = line.match(/[0-9]+/g).map((n) => parseInt(n));
    // console.log('FILL THE ROW IN');
    // console.log(boardIndex, rowIndex, columns);
    boards[boardIndex][rowIndex] = columns;
    rowIndex++;
  }
})

while(play) {
  boards.forEach((board) => {
    for(let i = 0; i < 5; i++) {
      draw.every((n) => )
      board[i] 
    }
  })

  play = false;
}

// console.log(boards);
console.log(`WINNING SCORE: ${score}`);

function GetRow(board, row) {
  return board.
}
