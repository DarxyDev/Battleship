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

function _checkFullCoordBounds(coord){
    const xBound = gameboard.get.width();
    const yBound = gameboard.get.height();
    for(let x = 0; x < xBound ; x++){
        for(let y = 0; y < yBound; y++){
            
        }
    }
}