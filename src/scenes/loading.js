import domManager from "../script/DOM-manager";

function initAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0)
    })
}
const loading = {
    container: document.getElementById('loading_scene'),
    initAsync,
}

export default loading;