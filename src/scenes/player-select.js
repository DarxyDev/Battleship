import sceneManager from "../script/scene-manager";
const ref =  {
    container: document.getElementById('player-select-scene'),
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
const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class

const playerSelect = {
    getContainer:()=>{return ref.container},
    initAsync: initAsync,

}
export default playerSelect;

async function initAsync(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            setEventListeners();
            resolve();
        },0)
    });
}

function setEventListeners() {
    _setPlayerEventListeners(ref.player1);
    _setPlayerEventListeners(ref.player2);
    ref.gameboardSettings.startGameBtn.addEventListener('click',async (e)=>{
        const gameScene = sceneManager.getScenes().gameScene;
        const loadingScene = sceneManager.getScenes().loadingScene;
        sceneManager.loadScene(loadingScene)
        await gameScene.initGameAsync();
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
}


// import domManager from "../script/DOM-manager";
// import game from "./game";


// const playerTypeStates = ['human', 'ai-easy', 'ai-medium', 'ai-hard']; //each state must have cooresponding class

// const playerSelect = (()=>{

//     function setupPlayerSelectScene() {
//         const ref = domManager.getReferences()
//         setEventListeners(ref.menus.playerSelect);
    
    
    
//         function setEventListeners(pSelectRef = ref.menus.playerSelect) {
//             setPlayerEventListeners(pSelectRef.player1);
//             setPlayerEventListeners(pSelectRef.player2);
//             pSelectRef.gameboardSettings.startGameBtn.addEventListener('click',(e)=>{
//                 game.setupNewGame();
//                 domManager.switchToScene(ref.game.scene);
//             })
    
//             function setPlayerEventListeners(refObj = pSelectRef.player1) {
//                 refObj.typeBtn.addEventListener('click', (e) => {
//                     //moves up a state and adds/removes appropriate classes
//                     let element = e.target
//                     let lastState = +element.getAttribute('state');
//                     let newState = (lastState + 1) % playerTypeStates.length;
//                     element.setAttribute('state', newState);
    
//                     switch (playerTypeStates[newState]) { //will update more later
//                         case 'human':
//                         case 'ai-easy':
//                         case 'ai-medium':
//                         case 'ai-hard':
//                             element.classList.remove(`player-type-state-${playerTypeStates[lastState]}`);
//                             element.classList.add(`player-type-state-${playerTypeStates[newState]}`);
//                             refObj.typeHeader.textContent = playerTypeStates[newState];
//                             break;
//                         default: console.log(`${newState} is not a valid index of ${playerTypeStates}`);
    
//                     }
    
//                 })
//             }
//         }
//     }
//     return {setupPlayerSelectScene};
// })()



// export default playerSelect;
