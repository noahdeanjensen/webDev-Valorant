let currentPlayer = 'X';
let gameActive = true;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerMove(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

    checkWin();
    checkTie();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (gameActive && currentPlayer === 'O') {
        computerMove();
    }
}

function computerMove() {
    let emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let computerChoice = emptyCells[randomIndex];

        gameBoard[computerChoice] = currentPlayer;
        document.getElementsByClassName('cell')[computerChoice].innerText = currentPlayer;

        checkWin();
        checkTie();

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
        }
    }
}

function checkTie() {
    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        document.getElementById('message').innerText = "It's a tie!";
    }
}

function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];

    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell => {
        cell.innerText = '';
    });

    document.getElementById('message').innerText = '';
}