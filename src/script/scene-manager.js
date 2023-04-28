import gameScene from "../scenes/game";
import loadingScene from "../scenes/loading";
import playerSelect from "../scenes/player-select";

const _scenes = {
    currentScene: loadingScene,
    loadingScene: loadingScene,
    gameScene: gameScene,
    playerSelectScene: playerSelect
}

function getScenes() {
    return _scenes;
}
function loadScene(scene) {
    _scenes.currentScene.getContainer().classList.add('hidden');
    _scenes.currentScene = scene;
    scene.getContainer().classList.remove('hidden');
}


const sceneManager = {
    loadScene: loadScene,
    getScenes: getScenes,
}

export default sceneManager;