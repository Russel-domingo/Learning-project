const Ship = (length) => {
    let hits = 0;

    const hit = () => {
        hits++;
    };

    const isSunk = () => {
        return hits > length;
    };


    return {
        hit,
        length,
        isSunk,
    }
}

export default Ship;    