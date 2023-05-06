//heavily copied from last version -- might need updates for consistency.
//copied playerTypeStates, setEventListeners, ref

import domManager from "../script/DOM-manager";
const _template = document.getElementById('player-select_template');
const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class

let ref;

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
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
    getPlayerSettingsPromise: new Promise(resolve => { _resolveScene = resolve })
}

export default playerSelect;

/////
function _setEventListeners() {
    _setPlayerEventListeners(ref.player1);
    _setPlayerEventListeners(ref.player2);
    ref.gameboardSettings.startGameBtn.addEventListener('click', async (e) => {
        const playerInfo = {
            player1:_setPlayerInfo(ref.player1),
            player2:_setPlayerInfo(ref.player2),
        }
        _resolveScene(playerInfo);
        //fn
        function _setPlayerInfo(playerRef){
            let name = playerRef.nameInput.value;
            const playerState = playerRef.typeBtn.getAttribute('state');
            let type = playerTypeStates[playerState];
            let difficulty = type.slice(3); 
            return {name, type, difficulty}
        }
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
            typeBtn: playerSelect.container.querySelector('*#player1-type-btn'),
            typeHeader: playerSelect.container.querySelector('*#player1-type-header'),
            nameInput: playerSelect.container.querySelector('*#player1-name-input')
        },
        player2: {
            typeBtn: playerSelect.container.querySelector('*#player2-type-btn'),
            typeHeader: playerSelect.container.querySelector('*#player2-type-header'),
            nameInput: playerSelect.container.querySelector('*#player2-name-input')
        },
        gameboardSettings: {
            startGameBtn: playerSelect.container.querySelector('*#start-game-btn')
        }
    }
}