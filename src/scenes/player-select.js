import domManager from "../script/DOM-manager";
const _template = document.getElementById('player-select_template')

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0)
    })
}
const playerSelect = {
    container: domManager.getContainerFromTemplate(_template),
    initAsync,
}

export default playerSelect;