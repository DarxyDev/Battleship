import { aiFactory } from "../script/AI-mechanics";
import { gameboardFactory } from "../script/obj-factories";
import domManager from "../script/DOM-manager";
//vars
const ref = {
    sectionContainers:{
        left: document.getElementById('board-container-left'),
        right: document.getElementById('board-container-right'),
        dialogue: document.getElementById('dialogue-container'),
    },
    player1:{
        boardContainer: undefined,
        boardTiles:[],
    },
    player2:{
        boardContainer: undefined,
        boardTiles:[],
    },
}
const boardWidth = 10;
const boardHeight = 10;
const _container = document.getElementById('game-scene');
const players = {
    player1: undefined,
    player2: undefined,
}

//scene export obj
const gameScene = {
    getContainer: ()=>{return _container;},
    initAsync,
}

export default gameScene;

//functions
async function initAsync(player1, player2){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(ref.sectionContainers.left.children[0])
            // this is a test, do this again after creating gameboards
            domManager.setElementAspectRatio(ref.sectionContainers.left.children[0], boardWidth / boardHeight);
            //
            _setupPlayer(player1);
            _setupPlayer(player2);
            _setupUI();
            resolve();
        },0)
    })
    //fn
    function _setupPlayer(player){
        if(player.get.type() !== 'human') _setupPlayerAi();
        player.gameboard = gameboardFactory(boardWidth, boardHeight);
    
        //fn
        function _setupPlayerAi(){
            let difficulty = player.get.type().substring(3);
            player.ai = aiFactory(difficulty);
        }
    }
    
    function _setupUI(){
        console.log('working in game.js setupUI()')
    }
}

//draw both boards for each player
//setup logic to show/hide board
//setuplogic for whose board is shown

