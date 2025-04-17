// Declaration
const board = document.getElementById("board");

// Loop / Render Board
let boardLoop = 9;
let boardSquare = "";

for(let i = 0; i < 9; i++)
{
    if(i % 2 == 0)
    {
        boardSquare += `<div onclick="select(${i})" id="board-square-${i}" class="square square-color-one"></div>`;
    }

    if(i % 2 == 1)
    {
        boardSquare += `<div onclick="select(${i})" id="board-square-${i}" class="square square-color-two"></div>`;
    }
}

board.innerHTML += boardSquare; 
