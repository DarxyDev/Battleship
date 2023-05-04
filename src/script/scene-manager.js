import domManager from "./DOM-manager";
import loading from "../scenes/loading";
import startGame from "../scenes/start-game";

const scenes = {
    loading,
    startGame,
}
function getScenes(){return scenes};

let _currentScene = scenes.loading;
function switchToScene(scene){
    domManager.removeElement(_currentScene.container);
    _currentScene = scene;
    domManager.addElement(scene.container);
}

async function initAsync(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            Object.values(scenes).forEach(async scene =>{
                await scene.initAsync();
            })
            resolve();
        },0)
    })
}

const sceneManager = {
    initAsync,
    switchToScene,
    getScenes
};

export default sceneManager;