const renderBoard = (
    player,
    container,
    hideShips = false
) => {

    container.innerHTML = "";

    const board = player.gameBoard.getBoard();

    for (let row = 0; row < 10; row++) {

        for (let col = 0; col < 10; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            // Access the 2D array
            const content = board[row][col];

            if (content !== null && !hideShips) {
                cell.classList.add("ship");
            }

            container.appendChild(cell);
        }
    }
};

export {
    renderBoard
};