import { shipFactory, gameboardFactory, playerFactory } from "../obj-factories";

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
    const gameboard = gameboardFactory(7, 7);
    const ship = shipFactory('testName', 3);

    expect(gameboard.placeShip(ship, [0, 0], false)).toBe(true);
    expect(gameboard.placeShip(ship, [0, 0], false)).toBe(false);

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
