import './style/normalize.css';
import './style/style.css';

import domManager from './script/DOM-manager';
import sceneManager from './script/scene-manager';

console.log('use queryselector on page container to get references');
const main = (async()=>{
    //init
    console.log(document.getElementById('player2-select'))
    await domManager.initAsync();
    await sceneManager.initAsync();

    const scenes = sceneManager.getScenes();
    sceneManager.switchToScene(scenes.startGame);
    await scenes.startGame.scenePromise;
    sceneManager.switchToScene(scenes.playerSelect)

})()