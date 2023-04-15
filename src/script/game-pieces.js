const pieces = [];

_addPiece('Destroyer', 2, null);
_addPiece('Submarine', 3, null);
_addPiece('Cruiser', 3, null);
_addPiece('Battleship', 4, null);
_addPiece('Carrier', 5, null);

export default pieces;

function _addPiece(name, length, img){
    let piece = {
        name: name,
        length: length,
        img: img
    }
    pieces.push(piece);
}