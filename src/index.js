import './style/normalize.css';
import './style/style.css';
import config from './script/config'
import domManager from './script/DOM-manager';


const ref = domManager.getReferences();
let sizeRatio = config.get.gameboardSize.width() / config.get.gameboardSize.height();



// domManager.createGameboards(sizeRatio);
// domManager.switchToPlayer1();