import destroyerSVG from "../img/rowboat.svg";
import submarineSVG from "../img/submarine.svg";
import cruiserSVG from "../img/speedboat.svg";
import battleshipSVG from "../img/yacht.svg";
import carrierSVG from "../img/cruiseshiplg.svg";


const shipPieces = [];

_addPiece('Destroyer', 2, destroyerSVG);
_addPiece('Submarine', 3, submarineSVG);
_addPiece('Cruiser', 3, cruiserSVG);
_addPiece('Battleship', 4, battleshipSVG);
_addPiece('Carrier', 5, carrierSVG);

export default shipPieces;

function _addPiece(name, length, img){
    const image = new Image();
    image.src = img;
    image.setAttribute('preserveAspectRatio', 'none');
    let piece = {
        name,
        length,
        image,
    }
    shipPieces.push(piece);
};