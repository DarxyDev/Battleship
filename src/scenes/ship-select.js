import domManager from "../script/DOM-manager";
import pieces from "../script/game-pieces";
const _template = document.getElementById('ship-select_template')

async function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0)
    })
}
async function onLoadAsync() {
    return new Promise(resolve => {
        setTimeout(() => {

            resolve();
        }, 0)
    })
}
let _resolveScene;

const shipSelect = {
    container: domManager.getContainerFromTemplate(_template),
    initAsync,
    onLoadAsync,
    scenePromise: new Promise(resolve => { _resolveScene = resolve })
}

export default shipSelect;