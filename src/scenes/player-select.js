//heavily copied from last version -- might need updates for consistency.
//copied playerTypeStates, setEventListeners, ref

import domManager from "../script/DOM-manager";
const _template = document.getElementById('player-select_template');
const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class

let ref;

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(playerSelect);
            _setRef();
            _setEventListeners();
            resolve();
        }, 0)
    })
}
let _resolveScene;

const playerSelect = {
    container: domManager.getContainerFromTemplate(_template),
    initAsync,
    scenePromise: new Promise(resolve => { _resolveScene = resolve })
}

export default playerSelect;

/////
function _setEventListeners() {
    _setPlayerEventListeners(ref.player1);
    _setPlayerEventListeners(ref.player2);
    ref.gameboardSettings.startGameBtn.addEventListener('click', async (e) => {
        const gameScene = sceneManager.getScenes().gameScene;
        const loadingScene = sceneManager.getScenes().loadingScene;
        const player1 = _makePlayerObj(ref.player1);
        const player2 = _makePlayerObj(ref.player2);
        sceneManager.loadScene(loadingScene)
        await gameScene.initAsync(player1, player2);
        sceneManager.loadScene(gameScene)
    })

    function _setPlayerEventListeners(refObj) {
        refObj.typeBtn.addEventListener('click', (e) => {
            //moves up a state and adds/removes appropriate classes
            let element = e.target
            let lastState = +element.getAttribute('state');
            let newState = (lastState + 1) % playerTypeStates.length;
            element.setAttribute('state', newState);

            switch (playerTypeStates[newState]) { //will update more later
                case 'human':
                case 'ai-easy':
                case 'ai-medium':
                case 'ai-hard':
                    element.classList.remove(`player-type-state-${playerTypeStates[lastState]}`);
                    element.classList.add(`player-type-state-${playerTypeStates[newState]}`);
                    refObj.typeHeader.textContent = playerTypeStates[newState];
                    break;
                default: console.log(`${newState} is not a valid index of ${playerTypeStates}`);

            }
        })
    }
    function _makePlayerObj(playerRef = ref.player1) {
        const name = playerRef.nameInput.value;
        const typeIndex = playerRef.typeBtn.getAttribute('state');
        return playerFactory(name, playerTypeStates[typeIndex]);
    }
}
function _setRef() {
    ref = {
        player1: {
            typeBtn: document.getElementById('player1-type-btn'),
            typeHeader: document.getElementById('player1-type-header'),
            nameInput: document.getElementById('player1-name-input')
        },
        player2: {
            typeBtn: document.getElementById('player2-type-btn'),
            typeHeader: document.getElementById('player2-type-header'),
            nameInput: document.getElementById('player2-name-input')
        },
        gameboardSettings: {
            startGameBtn: document.getElementById('start-game-btn')
        }
    }
}

console.log('instead of making playerobj and changing scene -> resolve promise with player data')