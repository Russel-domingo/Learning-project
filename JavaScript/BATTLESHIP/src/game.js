import Player from "./player.js";
import Ship from "./ship.js";

const Game = () => {

    const player = Player("real");
    const computer = Player("computer");

    // Create player's ships
    const playerShip1 = Ship(3);
    const playerShip2 = Ship(2);

    // Create computer's ships
    const computerShip1 = Ship(3);
    const computerShip2 = Ship(2);

    // Place player's ships
    player.gameBoard.placeShip(
        playerShip1,
        0,
        0,
        "horizontal"
    );

    player.gameBoard.placeShip(
        playerShip2,
        3,
        3,
        "vertical"
    );

    // Place computer's ships
    computer.gameBoard.placeShip(
        computerShip1,
        5,
        5,
        "horizontal"
    );

    computer.gameBoard.placeShip(
        computerShip2,
        8,
        1,
        "vertical"
    );


    // Computer attacks player
    const computerAttack = () => {

        let row;
        let col;
        let result;

        do {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);

            result = player.gameBoard.receiveAttack(
                row,
                col
            );

        } while (result === "already-attacked");

        return result;
    };

    return {
        player,
        computer,
        computerAttack
    };
};

export default Game;