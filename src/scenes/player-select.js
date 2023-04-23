import domManager from "../script/DOM-manager";
import gamespace from "./gamespace";


const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class

const playerSelect = (()=>{

    function setupPlayerSelectScene() {
        const ref = domManager.getReferences()
        setEventListeners(ref.menus.playerSelect);
    
    
    
        function setEventListeners(pSelectRef = ref.menus.playerSelect) {
            setPlayerEventListeners(pSelectRef.player1);
            setPlayerEventListeners(pSelectRef.player2);
            pSelectRef.gameboardSettings.startGameBtn.addEventListener('click',(e)=>{
                gamespace.setupNewGame();
                domManager.switchToScene(ref.gamespace.scene);
            })
    
            function setPlayerEventListeners(refObj = pSelectRef.player1) {
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
    return {setupPlayerSelectScene};
})()



export default playerSelect;
