const domManager = (() => {
    const _references = {
        game:{
            container: document.getElementById('game-container'),
            gameBox: undefined,
        }
    }
    function getReferences(){
        return _references;
    };
    function addGameBox(){
        const gameBox = document.createElement('gameBox');
        gameBox.setAttribute('id','game-box');
        _references.game.container.appendChild(gameBox);
        _references.game.gameBox = gameBox;
        return gameBox;
    
    }
    function setElementAspectRatio(element, ratio = 1) {
        const parent = element.parentNode;
        window.addEventListener('resize', _onResize);
        _onResize();
        function _onResize(e) {
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;

            let newSize;
            if (height > width) newSize = width;
            else newSize = height;

            let newWidth = newSize;
            let newHeight = newSize;
            if (ratio > 1) newHeight *= (1 / ratio);
            else newWidth *= ratio;

            element.style.width = newWidth + 'px';
            element.style.height = newHeight + 'px';
        }
    };
    return { getReferences,setElementAspectRatio, addGameBox};
})();
export default domManager;