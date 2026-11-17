import GameBoard from "./gameBoard.js";

const player = (type) => {
    
    const gameBoard = GameBoard();

    return {
        type,
        gameBoard,
    }
}

export default player;