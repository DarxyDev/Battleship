function shipFactory(name, length) {
    const _name = name;
    const _length = length;
    let _hits = 0;

    const ship = {
        get: {
            name: () => { return _name },
            length: () => { return _length }
        },
        hit: () => { _hits++; },
        isSunk: () => { return (_hits >= _length) }
    }
    return ship;
}

function gameboardFactory(width = 10, height = 10) {
    const boardSize = width * height;
    let _shipsRemaining = 0;
    const _boardArray = [];
    for (let i = 0; i < boardSize; i++) _boardArray.push(false);
    const _hitArray = [];
    for (let i = 0; i < boardSize; i++) _hitArray.push(false);

    const gameboard = {
        get: {
            shipsRemaining: () => { return _shipsRemaining }
        },
        placeShip: (ship, coord, rotated) => {
            for (let i = 0; i < ship.get.length(); i++) {
                let j = rotated ?
                    _get2DIndex(coord[0], coord[1] + i) :
                    _get2DIndex(coord[0] + i, coord[1]);
                if (_boardArray[j]) return false;
            }
            for (let i = 0; i < ship.get.length(); i++) {
                let j = rotated ?
                    _get2DIndex(coord[0], coord[1] + i) :
                    _get2DIndex(coord[0] + i, coord[1]);
                _boardArray[j] = ship;
            }

            _shipsRemaining++;
            return true;
        },
        receiveAttack: (coord) => {
            const i = _get2DIndex(coord);

            if (_hitArray[i]) return false;
            _hitArray[i] = true;

            const ship = _boardArray[i];
            if (!ship) return 'miss';
            ship.hit();
            if (ship.isSunk()) {
                _shipsRemaining--;
                return 'sunk';
            }
            return 'hit';
        },
        isGameOver: () => { return _shipsRemaining <= 0 }
    }
    return gameboard;
    //private
    function _get2DIndex(a, b) {
        if (typeof (a) === typeof ([]) &&
            (b === undefined)) {
            return a[0] * width + a[1];
        }
        else return a * width + b;
    }
}

function playerFactory(name) {
    let _games = 0;
    let _wins = 0;
    let _streak = 0;

    const player = {
        get: {
            name: () => { return name },
            games: () => { return _games },
            wins: () => { return _wins },
            streak: () => { return _streak }
        },
        gameWon: (wasWon) => {
            if (wasWon) {
                _wins++;
                _streak++;
            }
            else _streak = 0;
            _games++;
        }
    }
    return player;
}
//WORKING HERE -- JUST STARTED MAKING PLAYER FACTORY
export { shipFactory, gameboardFactory, playerFactory};
