import './style/normalize.css';
import './style/style.css';

import domManager from './script/DOM-manager';
import sceneManager from './script/scene-manager';


const main = (async()=>{
    //init
    await domManager.initAsync();
    await sceneManager.initAsync();

    const scenes = sceneManager.getScenes();
    sceneManager.switchToScene(scenes.startGame);
    await scenes.startGame.scenePromise;

})()