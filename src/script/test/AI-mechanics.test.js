import getAiMechanicsObj from "../AI-mechanics";
import config from "../config";
import { gameboardFactory, shipFactory } from "../obj-factories";

let ship,ai;
beforeEach(()=>{
    ai = getAiMechanicsObj();
    let gameboard = gameboardFactory(5, 5);
    ai.set.gameboard(gameboard);
    ship = shipFactory('shipName', 3);
    gameboard.placeShip(ship,[2,1]);
})
test('getAiMechanicsObj EASY', () => {
    config().set.difficulty.easy();

})
test('getAiMechanicsObj HARD', () => {
    config().set.difficulty.hard();
})

function _checkFullCoordBounds(coord, bound){
    for(let i = 0; i < bound; i++){
        let coord = ai.get.attackCoords();
    }
}