import config from "./config";

function getAiMechanicsObj() {
    let _gameboard;
    const aiObj = {
        get: {
            attackCoords: () => {

            }
        },
        set: {
            gameboard: (gameboard) => { _gameboard = gameboard }
        }
    }

    return aiObj;
}

export default getAiMechanicsObj;