import config from "./config";

function aiFactory() {
    let _gameboard;
    const _prevMoves = [];
    const aiObj = {
        get: {
            attackCoords: () => {
                let coord;
                switch (config.get.difficulty()) {
                    case 'easy':
                        coord = _getEasyAttackCoords();
                        break;
                    case 'medium':
                        coord = _getMediumAttackCoords();
                        break;
                    case 'hard':
                        coord = _getHardAttackCoords();
                        break;
                    default:
                        return new Error(`${config().get.difficulty()} is an invalid difficulty.`);
                }
                _prevMoves.push(coord);
                return coord;
            },
        },
        set: {
            gameboard: (gameboard) => { _gameboard = gameboard }
        }
    }

    return aiObj;

    function _getEasyAttackCoords() {
        const width = _gameboard.get.width();
        const height = _gameboard.get.height();
        let x = Math.round(Math.random() * (width - 1));
        let y = Math.round(Math.random() * (height - 1));
        if (_prevMoves.length <= 0) return [x, y];
        if(_prevMoves.length >= height * width) return false;
        while (_coordWasUsed([x, y],_prevMoves)) {
            if (Math.random() > .5) x = (x + 1) % width;
            else y = (y + 1) % height;
        }
        return [x, y];
    }
    function _getMediumAttackCoords() {
        if (Math.random() < config.get.mediumDifficultyScale())
            return _getHardAttackCoords();
        return _getEasyAttackCoords();
    }
    function _getHardAttackCoords() {

    }
}

function checkCoordUnique(coord1, coord2) {
    if ((coord1[0] === coord2[0]) &&
        (coord1[1] === coord2[1]))
        return false;
    return true;
}

export { aiFactory, checkCoordUnique };

function _coordWasUsed(coord, prevCoordArr) {
    let result = false;
    prevCoordArr.forEach(cArr => {
        if (!checkCoordUnique(cArr, coord))
            return result = true;
    })
    return result;
}

