const _gameWindow = document.getElementById('game-window');
const _templates = {
    blackout: document.getElementById('blackout_template'),
    startGame: document.getElementById('start-game_template'),
    playerSelect: document.getElementById('player-select_template'),
    shipSelect: document.getElementById('ship-select_template'),
    mainGame: document.getElementById('main-game_template'),
    endGame: document.getElementById('end-game_template')
}
const _scenes = {
    loading: document.getElementById('loading_scene'),
}
let _currentScene = _scenes.loading;

function getScenes() {
    return _scenes;
}
function switchToScene(scene) {
    _currentScene.remove();
    _currentScene = scene;
    _gameWindow.appendChild(scene);
}

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            _setScenesFromTemplates();
            resolve();
        }, 0)
    })

    //fn
    function _setScenesFromTemplates() {
        for (const [key, value] of Object.entries(_templates)) {
            _scenes[key] = _cloneFromTemplate(value);
        }

        //fn
        function _cloneFromTemplate(template) {
            if (!template.content.firstElementChild) console.log(new Error(`Invalid template: ${template}`))
            else return template.content.firstElementChild.cloneNode(true);
        }
    }
}

const domManager = {
    initAsync,
    getScenes,
    switchToScene,
}

export default domManager;