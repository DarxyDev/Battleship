const domManager = (() => {
    const _references = {
        game: {
            sections: {
                left: document.getElementById('left-section'),
                right: document.getElementById('right-section'),
                top: document.getElementById('top-section')
            },
            p1: {
                playerBoard: undefined,
                enemyBoard: undefined
            },
            p2: {
                playerBoard: undefined,
                enemyBoard: undefined
            },
        },
    }
    function getReferences() {
        return _references;
    };

    function hideElement(element) { element.classList.add('hidden'); }
    function unhideElement(element) { element.classList.remove('hidden'); }

    function createGameboards(ratio) {
        _createPlayerGameboards(_references.game.p1);
        _createPlayerGameboards(_references.game.p2);

        function _createPlayerGameboards(playerRef) {
            let gameboard = document.createElement('gameboard');
            hideElement(gameboard);
            _references.game.sections.left.appendChild(gameboard);
            _setElementAspectRatio(gameboard, ratio);
            playerRef.playerBoard = gameboard;

            gameboard = document.createElement('gameboard');
            hideElement(gameboard);
            _references.game.sections.right.appendChild(gameboard);
            _setElementAspectRatio(gameboard, ratio);
            playerRef.enemyBoard = gameboard;

            function _setElementAspectRatio(element, ratio = 1) {
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
            }
        }
    };
    function switchToPlayer1() {
        _hidePlayerBoards(_references.game.p2);
        _showPlayerBoards(_references.game.p1);
    }
    function switchToPlayer2() {
        _hidePlayerBoards(_references.game.p1);
        _showPlayerBoards(_references.game.p2);
    }
    function _hidePlayerBoards(playerRef){
        hideElement(playerRef.playerBoard);
        hideElement(playerRef.enemyBoard);
    }
    function _showPlayerBoards(playerRef){
        unhideElement(playerRef.playerBoard);
        unhideElement(playerRef.enemyBoard);
    }
    return { getReferences, hideElement, unhideElement, switchToPlayer1, switchToPlayer2, createGameboards };
})();
export default domManager;