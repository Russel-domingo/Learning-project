function knightMoves(x, y) {
    const moves = [
                [2, 1],  [2, -1], [-2, 1],
                [-2,-1], [1, 2],  [1, -2],
                [-1, 2], [-1, -2]
            ];

    const queue = [];

    const visited = new Set();

    const parent = new Map();

    queue.push(x);
    visited.add(x.toString());

    while(queue.length > 0) {
        const current = queue.shift();

        if (current[0] === y[0] && current[1] === y[1]) {
            const path = [];
            let node = current;

            while (node) {
                path.push(node);
                node = parent.get(node.toString());
            }
            path.reverse();
            
            console.log(`You made it ${path.length -1} moves Here's your path`);
            
            path.forEach((position) => console.log(position));
            return path;
        }

        for (const move of moves) {
            const newX = current[0] + move[0];
            const newY = current[1] + move[1];

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                const neighbor = [newX, newY];
                const key = neighbor.toString();

                if (!visited.has(key)) {
                    visited.add(key);
                    parent.set(key, current);
                    queue.push(neighbor);
                }
            }
        }

    }
}



knightMoves([0, 0], [0, 0]);