const _gameWindow = document.getElementById('game-window');
const _templates = {
    blackout: document.getElementById('blackout_template'),
    startGame: document.getElementById('start-game_template'),
    playerSelect: document.getElementById('player-select_template'),
    shipSelect: document.getElementById('ship-select_template'),
    mainGame: document.getElementById('main-game_template'),
    endGame: document.getElementById('end-game_template')
}

function getContainerFromTemplate(template) {
    return template.content.firstElementChild.cloneNode(true);
}

function addElement(element) {
    _gameWindow.appendChild(element);
}
function removeElement(element) {
    element.remove();
}
function addEventListeners(element, eventArray, callback) {
    if (!Array.isArray(eventArray))
        eventArray = [eventArray];
    eventArray.forEach(event => {
        element.addEventListener(event, callback);
    })
}
async function setElementAspectRatio(element, ratio = 1) {
    const parent = element.parentNode;
    window.addEventListener('resize', _onResize);
    await new Promise(resolve=>{setTimeout(()=>{resolve()},0)}) //forces a redraw
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

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0)
    })
}

const domManager = {
    initAsync,
    getContainerFromTemplate,
    addElement,
    removeElement,
    addEventListeners,
    setElementAspectRatio
}

export default domManager;