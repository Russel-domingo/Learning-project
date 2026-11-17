const GameBoard = () => {

    const ships = [];
    const missedShots = [];
    const attackedCoordinates = [];

    const board = Array.from(
        { length: 10 },
        () => Array(10).fill(null)
    );

    const placeShip = (ship, row, col, direction) => {

        if (direction === "horizontal") {

            for (let i = 0; i < ship.length; i++) {
                board[row][col + i] = ship;
            }

        }

        if (direction === "vertical") {

            for (let i = 0; i < ship.length; i++) {
                board[row + i][col] = ship;
            }

        }

        ships.push(ship);
    };

    const receiveAttack = (row, col) => {

        const alreadyAttacked = attackedCoordinates.some(
            ([attackedRow, attackedCol]) =>
                attackedRow === row &&
                attackedCol === col
        );

        if (alreadyAttacked) {
            return "already-attacked";
        }

        attackedCoordinates.push([row, col]);

        const cell = board[row][col];

        if (cell === null) {
            missedShots.push([row, col]);

            return "miss";
        }

        cell.hit();

        return "hit";
    };

    const allShipsSunk = () => {
        return ships.every(
            ship => ship.isSunk()
        );
    };

    const getBoard = () => {
        return board;
    };

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        getBoard
    };
};

export default GameBoard;