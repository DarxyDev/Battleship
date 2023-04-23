import domManager from "../script/DOM-manager";


const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class
//public
function setupPlayerSelectScene() {
    const ref = domManager.getReferences().menus.playerSelect;
    setEventListeners();



    function setEventListeners() {
        setPlayerEventListeners(ref.player1);
        setPlayerEventListeners(ref.player2);

        function setPlayerEventListeners(refObj = ref.player1) {
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
    }
}

export default setupPlayerSelectScene;
