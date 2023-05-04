const _gameWindow = document.getElementById('game-window');
const _templates = {
    blackout: document.getElementById('blackout_template'),
    startGame: document.getElementById('start-game_template'),
    playerSelect: document.getElementById('player-select_template'),
    shipSelect: document.getElementById('ship-select_template'),
    mainGame: document.getElementById('main-game_template'),
    endGame: document.getElementById('end-game_template')
}

function getContainerFromTemplate(template){
    return template.content.firstElementChild.cloneNode(true);
}

function addElement(element){
    _gameWindow.appendChild(element);
}
function removeElement(element){
    element.remove();
}

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0)
    })
}

const domManager = {
    initAsync,
    getContainerFromTemplate,
    addElement,
    removeElement,
}

export default domManager;