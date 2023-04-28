import './style/normalize.css';
import './style/style.css';
import sceneManager from './script/scene-manager';

const main = (async()=>{
    //init
    const scenes = sceneManager.getScenes();
    await scenes.playerSelectScene.initAsync();
    //
    sceneManager.loadScene(scenes.playerSelectScene);
})()

console.log('tranfer player-select logic to new object, do not use DOMManager')