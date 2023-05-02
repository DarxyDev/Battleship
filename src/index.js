import './style/normalize.css';
import './style/style.css';
import sceneManager from './script/scene-manager';

const main = (async()=>{
    //init
    const scenes = sceneManager.getScenes();
    await scenes.playerSelectScene.initAsync();
    // start
    sceneManager.loadScene(scenes.playerSelectScene);
})()
