import Game from "./game.js";
import { renderBoard } from "./dom.js";

const game = Game();

const player = game.player;
const computer = game.computer;

const playerBoard = document.querySelector("#player-board");

const computerBoard = document.querySelector("#computer-board");

const message = document.querySelector("#message");

renderBoard(player, playerBoard);
renderBoard(computer, computerBoard);

computerBoard.addEventListener("click", (event) => {
    const cell = event.target;

    if (!cell.classList.contains("cell")) {
        return;
    }

    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    const result = computer.gameBoard.receiveAttack(row, col);

    if (result === "already-attacked") {
        message.textContent = "You already attacked this position";
        return;
    }

    console.log("Player attack", result);

    if (computer.gameBoard.allShipSunk) {
        message.textContent = "You win";

        renderBoard(player, playerBoard);

        renderBoard(computer, computerBoard, true);
        
        return;
    }

    const computerResult = game.computerAttack();

    console.log("Computer attack", computerResult);

    renderBoard(player, playerBoard);
    
    renderBoard(computer, computerBoard, true);

    if (player.gameBoard.allShipsSunk()) {
        
        message.textContent = "Computer wins";
        return;
    }

    message.textContent = "Your turn";
});