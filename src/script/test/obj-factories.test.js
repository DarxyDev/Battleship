import { shipFactory, gameboardFactory, playerFactory, get2DIndex } from "../obj-factories";

test('ShipFactory', () => {
    const ship = shipFactory('testName', 3);
    expect(ship.get.name()).toBe("testName");
    expect(ship.get.length()).toBe(3);

    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('gameboardFactory', () => {
    const gameboard = gameboardFactory(10, 10);
    const ship = shipFactory('testName', 3);

    expect(gameboard.placeShip(ship, [0, 0], false)).toBe(true);
    expect(gameboard.placeShip(ship, [0, 0], false)).toBe(false);
    expect(gameboard.placeShip(ship, [0, 0], true)).toBe(false);
    expect(gameboard.placeShip(ship, [2, 0], false)).toBe(false);
    expect(gameboard.placeShip(ship, [9, 9], false)).toBe(false);
    expect(gameboard.placeShip(ship, [11, 11], false)).toBe(false);
    expect(gameboard.placeShip(ship, [-1, -1], false)).toBe(false);

    expect(gameboard.get.shipsRemaining()).toBe(1);
    expect(gameboard.receiveAttack([0, 0])).toBe('hit');
    expect(gameboard.receiveAttack([0, 0])).toBeFalsy();
    expect(gameboard.receiveAttack([0, 4])).toBe('miss');
    expect(gameboard.receiveAttack([1, 0])).toBe('hit');
    expect(gameboard.receiveAttack([2, 0])).toBe('sunk');
    expect(gameboard.get.shipsRemaining()).toBe(0);
    expect(gameboard.isGameOver()).toBeTruthy();
})
test('playerFactory', () => {
    const player = playerFactory('test');
    expect(player.get.name()).toBe('test');
    expect(player.get.wins()).toBe(0);
    expect(player.get.games()).toBe(0);
    expect(player.get.streak()).toBe(0);
    player.gameWon(true);
    expect(player.get.wins()).toBe(1);
    expect(player.get.streak()).toBe(1);
    expect(player.get.games()).toBe(1);
    player.gameWon(true);
    expect(player.get.wins()).toBe(2);
    expect(player.get.streak()).toBe(2);
    expect(player.get.games()).toBe(2);
    player.gameWon(false);
    expect(player.get.wins()).toBe(2);
    expect(player.get.streak()).toBe(0);
    expect(player.get.games()).toBe(3);
})
test('get2DIndex',()=>{
    const array2D = ['a0','a1','a2','b0','b1','b2','c0','c1','c2'];
    function _test2D(x,y){
        return array2D[get2DIndex(rowLength, x, y)];
    }
    const rowLength = 3;
    
    expect(get2DIndex(rowLength,[0,2])).toBe(2);
    expect(get2DIndex(rowLength,[2,2])).toBe(8);
    expect(get2DIndex(rowLength,2,2)).toBe(8);
    expect(get2DIndex(rowLength,[3,2])instanceof Error).toBe(true);
    expect(_test2D(0,0)).toBe('a0');
    expect(_test2D([0,0])).toBe('a0');
    expect(_test2D(0,1)).toBe('a1');
    expect(_test2D([0,1])).toBe('a1');
    expect(_test2D(1,0)).toBe('b0');
    expect(_test2D([1,0])).toBe('b0');
    expect(_test2D(2,2)).toBe('c2');
    expect(_test2D([2,2])).toBe('c2');
    expect(_test2D(2,1)).toBe('c1');
    expect(_test2D([2,1])).toBe('c1');
    expect(_test2D([0,0],1)).toBe('a0');
})
