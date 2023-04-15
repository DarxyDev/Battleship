import { shipFactory, gameboardFactory } from "../obj-factories";

test('ShipFactory',()=>{
    const ship = shipFactory('testName',3);
    expect(ship.get.name()).toBe("testName");
    expect(ship.get.length()).toBe(3);

    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('gameboardFactory',()=>{
    const gameboard = gameboardFactory(7,7);
    const ship = shipFactory('testName',3);

    expect(gameboard.placeShip(ship,[0,0],false)).toBe(true);
    expect(gameboard.placeShip(ship,[0,0],false)).toBe(false);

    expect(gameboard.get.shipsRemaining()).toBe(1);
    expect(gameboard.receiveAttack([0,0])).toBe('hit');
    expect(gameboard.receiveAttack([0,0])).toBeFalsy();
    expect(gameboard.receiveAttack([0,4])).toBe('miss');
    expect(gameboard.receiveAttack([1,0])).toBe('hit');
    expect(gameboard.receiveAttack([2,0])).toBe('sunk');
    expect(gameboard.get.shipsRemaining()).toBe(0);
    expect(gameboard.isGameOver()).toBeTruthy();


})
