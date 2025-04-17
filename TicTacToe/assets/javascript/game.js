// Function

// Game mechanic
onPlay = true;
draw = false;
filledBoard = [
    [false, 0], [false, 0], [false, 0],
    [false, 0], [false, 0], [false, 0],
    [false, 0], [false, 0], [false, 0]
];

// Sound Effect
const selectAudio = document.getElementById("selectAudio");

// Player Turn
let playerOn = 1;
let turn = 0;

// Player Point
let playerOne = 0;
let playerTwo = 0;

function select(squareID)
{
    if(filledBoard[squareID][0] == false && onPlay)
    {
        if(playerOn == 1)
        {
            document.getElementById(`board-square-${squareID}`).innerHTML = `<div class="circle"></div>`;
            filledBoard[squareID][1] = playerOn;
            playerOn = 2;
        }
        else
        {
            document.getElementById(`board-square-${squareID}`).innerHTML = `<div class="cross"></div>`;
            filledBoard[squareID][1] = playerOn;
            playerOn = 1;
        }
        const selectNote = selectAudio.cloneNode();
        selectNote.play();
        filledBoard[squareID][0] = true;
        turn += 1;
        checkCondition();
    }
}

function checkCondition()
{
    // Draw Condition
    if(turn == 9)
    {
        draw = true;
    }

    // Player 1 Wins
    if(filledBoard[0][1] == 1 && filledBoard[1][1] == 1 && filledBoard[2][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[3][1] == 1 && filledBoard[4][1] == 1 && filledBoard[5][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[6][1] == 1 && filledBoard[7][1] == 1 && filledBoard[8][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[0][1] == 1 && filledBoard[4][1] == 1 && filledBoard[8][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[2][1] == 1 && filledBoard[4][1] == 1 && filledBoard[6][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[0][1] == 1 && filledBoard[3][1] == 1 && filledBoard[6][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }
    
    if(filledBoard[1][1] == 1 && filledBoard[4][1] == 1 && filledBoard[7][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    if(filledBoard[2][1] == 1 && filledBoard[5][1] == 1 && filledBoard[8][1] == 1)
    {
        console.log("Player 1 Wins !!!");
        onPlay = false;
        playerOne += 1;
        draw = false;
    }

    // Player 2 Wins
    if(filledBoard[0][1] == 2 && filledBoard[1][1] == 2 && filledBoard[2][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[3][1] == 2 && filledBoard[4][1] == 2 && filledBoard[5][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[6][1] == 2 && filledBoard[7][1] == 2 && filledBoard[8][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[0][1] == 2 && filledBoard[4][1] == 2 && filledBoard[8][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[2][1] == 2 && filledBoard[4][1] == 2 && filledBoard[6][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[0][1] == 2 && filledBoard[3][1] == 2 && filledBoard[6][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }
    
    if(filledBoard[1][1] == 2 && filledBoard[4][1] == 2 && filledBoard[7][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(filledBoard[2][1] == 2 && filledBoard[5][1] == 2 && filledBoard[8][1] == 2)
    {
        console.log("Player 2 Wins !!!");
        onPlay = false;
        playerTwo += 1;
        draw = false;
    }

    if(draw)
    {
        onPlay = false;
        console.log("Draw");
    }

}
















