import './style/normalize.css';
import './style/style.css';

import domManager from './script/DOM-manager';

const main = (async()=>{
    //init
    await domManager.initAsync();
    const scenes = domManager.getScenes();

    domManager.switchToScene(scenes.startGame)
})()