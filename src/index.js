import './style/normalize.css';
import './style/style.css';

import domManager from './script/DOM-manager';
import sceneManager from './script/scene-manager';
import playerFactory from './script/player-factory';
import { aiFactory } from './script/AI-mechanics';

const players = {}
const main = (async()=>{
    //init
    await domManager.initAsync();
    await sceneManager.initAsync();

    const scenes = sceneManager.getScenes();
    
    sceneManager.switchToScene(scenes.startGame);
    await scenes.startGame.scenePromise;

    sceneManager.switchToScene(scenes.playerSelect);
    const playersInfo = await scenes.playerSelect.getPlayerSettingsPromise;
    players.player1 = _makePlayerObj(playersInfo.player1);
    players.player2 = _makePlayerObj(playersInfo.player2);

    sceneManager.switchToScene(scenes.shipSelect)

})()

function _makePlayerObj(playerInfo){
    const playerObj = playerFactory(playerInfo.name, playerInfo.type);
    if(playerInfo.type !== 'human') playerObj.ai = aiFactory(playerInfo.difficulty);
    return playerObj;
}