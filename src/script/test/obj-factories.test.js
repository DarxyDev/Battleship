import { shipFactory } from "../obj-factories";

test('ShipFactory returns ship info correctly',()=>{
    const testShip = shipFactory('testName',3);
    expect(testShip.get.name()).toBe("testName");
    expect(testShip.get.length()).toBe(3);
    expect(testShip.get.hits()).toBe(0);
    testShip.hit();
    expect(testShip.get.hits()).toBe(1);
    testShip.hit();
    testShip.hit();
    expect(testShip.get.hits()).toBe(3);
    expect(testShip.isSunk()).toBe(true);
})