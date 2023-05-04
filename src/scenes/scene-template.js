import domManager from "../script/DOM-manager";
const _template = document.getElementById('template-name_template')

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {

            resolve();
        }, 0)
    })
}
let _resolveScene;

const sceneTemplate = {
    container: domManager.getContainerFromTemplate(_template),
    initAsync,
    scenePromise: new Promise(resolve=>{_resolveScene = resolve})
}

export default sceneTemplate;