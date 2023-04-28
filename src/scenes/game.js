
const _container = document.getElementById('game-scene');
const gameScene = {
    getContainer: ()=>{return _container;},
    initGameAsync: initGameAsync,
}

export default gameScene;

async function initGameAsync(player1, player2){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log({player1,player2})
            resolve();
        },0)
    })
}

