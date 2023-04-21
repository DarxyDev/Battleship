import './style/normalize.css';
import './style/style.css';
import config from './script/config'
import domManager from './script/DOM-manager';

const ref = domManager.getReferences();
//setup gameboard


createNewGameBox();
//
function createNewGameBox() {
    let width = config.get.gameboardSize.width();
    let height = config.get.gameboardSize.height();
    let gameBox = domManager.addGameBox();
    domManager.setElementAspectRatio(gameBox, width / height);
}