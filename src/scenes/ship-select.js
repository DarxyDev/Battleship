import domManager from "../script/DOM-manager";
import shipPieces from "../script/game-pieces";
import { createDOMGameboard } from "../script/gameboard-manager";

const _template = document.getElementById('ship-select_template');
const container = domManager.getContainerFromTemplate(_template);
const ref = { shipWindow: {ships:[]}, boardWindow: {}, menu: {} };

async function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            _setContainerRefs();
            resolve();
        }, 0)
    })
}
async function onLoadAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('draw gameboard, do stuff, in the end return gameboardObj for each player');
            console.log('might need to change #board-window to .board-window');
            _setupGameboard();
            _setupShipWindow();
            _setupDragEvents();

            resolve();
        }, 0)
    })
}
let _resolveScene;

const shipSelect = {
    container,
    initAsync,
    onLoadAsync,
    scenePromise: new Promise(resolve => { _resolveScene = resolve })
}

export default shipSelect;

function _setContainerRefs() {
    ref.boardWindow.container = container.querySelector("*#board-window");
    ref.shipWindow.container = container.querySelector("*#ship-window-container");
    ref.menu.container = container.querySelector('#ship-select-menu');
}

function _setupGameboard(){
    const gameboardDOM = createDOMGameboard();
    ref.boardWindow.container.appendChild(gameboardDOM);
    ref.boardWindow.board = gameboardDOM;
    ref.boardWindow.tiles = Array.from(gameboardDOM.querySelectorAll('div.tile'));
    domManager.setElementAspectRatio(gameboardDOM);
}
function _setupShipWindow(){
    shipPieces.forEach(ship =>{
        const shipSVG = ship.image;
        shipSVG.classList.add('ship');
        const shipContainer = document.createElement('div');
        shipContainer.appendChild(shipSVG);
        shipContainer.classList.add('ship-container');
        ref.shipWindow.container.appendChild(shipContainer);
        ref.shipWindow.ships.push(ship);
    })
}
let dragTarget = null;
function _setupDragEvents(){
    const tiles = ref.boardWindow.tiles;
    const ships = ref.shipWindow.ships;
    
    console.log('working here - _setupDragEvents()');
}



