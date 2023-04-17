import { aiFactory, checkCoordUnique } from "../AI-mechanics";
import config from "../config";
import { gameboardFactory, shipFactory } from "../obj-factories";
const SUCCESS = true;
const FAIL = false;

let ship, ai, gameboard;
beforeEach(() => {
    ai = aiFactory();
    gameboard = gameboardFactory(5, 5);
    ai.set.gameboard(gameboard);
    ship = shipFactory('shipName', 3);
    gameboard.placeShip(ship, [2, 1]);
})

test('checkCoordUnique', () => {
    expect(checkCoordUnique([0, 0], [0, 0])).toBe(false);
    expect(checkCoordUnique([0, 1], [0, 0])).toBe(true);
    expect(checkCoordUnique([1, 0], [0, 0])).toBe(true);
    expect(checkCoordUnique([0, 0], [0, 1])).toBe(true);
    expect(checkCoordUnique([1, 0], [0, 1])).toBe(true);
})
test('_getAllAttackCoords',()=>{
    config.set.difficulty.easy();
    let coordArr = _getAllAttackCoords();
    let width = gameboard.get.width();
    let height = gameboard.get.height();
    let check = undefined;
    coordArr.forEach((coord)=>{
        switch(true){
            case coord.length !== 2:
            case coord[0] < 0:
            case coord[1] < 0:
            case coord[0] >= width:
            case coord[1] >= height:
                check = {coord, width, height};
        }
    })
    expect(check).toBe(undefined);

})
test('aiFactory EASY', () => {
    config.set.difficulty.easy();
    const coordArr = _getAllAttackCoords();
    expect(_checkCoordArrBounds(coordArr)).toBe(SUCCESS);
    expect(_checkAllCoordsUnique(coordArr)).toBe(SUCCESS);
    expect(ai.get.attackCoords()).toBe(false);
})
test('aiFactory HARD', () => {
    config.set.difficulty.hard();
})

function _getAllAttackCoords() {
    const coordArr = [];
    const maxCoords = gameboard.get.width() * gameboard.get.height();
    for (let i = 0; i < maxCoords; i++)
        coordArr.push(ai.get.attackCoords());

    return coordArr
}
function _checkCoordArrBounds(coordArr) {
    const xBound = gameboard.get.height();
    const yBound = gameboard.get.width();
    const expectedLength = 2;

    coordArr.forEach(coord => {
        let x = coord[0];
        let y = coord[1];
        switch (true) {
            case coord.length >= expectedLength:
            case x >= xBound:
            case x < 0:
            case y >= yBound:
            case y < 0:
                return new Error(coord);
        }
    })
    return SUCCESS;
}

function _checkAllCoordsUnique(coordArr) {
    for (let i = 0; i < coordArr.length; i++) {
        for (let j = i + 1; j < coordArr.length; j++) {
            if (!checkCoordUnique(coordArr[i], coordArr[j]))
                return { coord: coordArr[i], coordArr, i, j };//
        }
    }
    return SUCCESS;
}