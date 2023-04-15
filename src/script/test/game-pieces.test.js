import pieces from '../game-pieces';

test('game-pieces',()=>{
    expect(pieces.length).toBeGreaterThan(0);
    pieces.forEach(piece => {
        expect(piece.name).not.toBe(undefined);
        expect(piece.img).not.toBe(undefined);
        expect(piece.length).toBeGreaterThan(0);
    })
})