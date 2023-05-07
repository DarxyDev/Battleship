import destroyerSVG from "../img/rowboat.svg"

const pieces = [];

_addPiece('Destroyer', 2, destroyerSVG);
_addPiece('Submarine', 3, null);
_addPiece('Cruiser', 3, null);
_addPiece('Battleship', 4, null);
_addPiece('Carrier', 5, null);

export default pieces;

function _addPiece(name, length, img){
    const image = new Image();
    image.src = img;
    let piece = {
        name,
        length,
        image,
    }
    pieces.push(piece);
};