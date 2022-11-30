const box = Array.from(document.querySelector(".box"));
const display = document.querySelector(".game--status");

let board = ['', '', '', '', '', '', '', '', '',]
let currentPlayer = 'X'
let gameActive = true

const winningMessage = () => `player ${currentPlayer} has won!!`;
const drawMessage = () => `Game ended in draw!`;
const switchPlayer = () => `it's ${currentPlayer}'s turn`;
