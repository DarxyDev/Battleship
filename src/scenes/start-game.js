import domManager from "../script/DOM-manager";
const _template = document.getElementById('start-game_template');

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            domManager.addEventListeners(startGame.container, 'click', _resolveScene);
            resolve();
        }, 0)
    })
}
let _resolveScene;
const startGame = {
    container: domManager.getContainerFromTemplate(_template),
    initAsync,
    scenePromise: new Promise(resolve=>{_resolveScene = resolve;})
}

export default startGame;