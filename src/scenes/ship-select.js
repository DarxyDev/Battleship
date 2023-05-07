import domManager from "../script/DOM-manager";
import pieces from "../script/game-pieces";
const _template = document.getElementById('ship-select_template');
const container = domManager.getContainerFromTemplate(_template);
const ref = { shipWindow: {}, boardWindow: {}, menu: {} };

async function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            _setRefs();
            resolve();
        }, 0)
    })
}
async function onLoadAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('draw gameboard, do stuff, in the end return gameboardObj for each player');
            console.log('might need to change #board-window to .board-window')
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

function _setRefs() {
    ref.boardWindow.container = container.querySelector("*#board-window");
    ref.shipWindow.container = container.querySelector("*#ship-window");
    ref.menu.container = container.querySelector('#ship-select-menu');
}