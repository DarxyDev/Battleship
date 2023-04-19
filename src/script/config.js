const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';
const _MED_DIFFICULTY_SCALE = .66;


function getConfigObj() {
    let _difficulty = MEDIUM;
    let _width = 10;
    let _height = 10;
    const configObj = {
        get: {
            difficulty: () => { return _difficulty },
            mediumDifficultyScale: () => { return _MED_DIFFICULTY_SCALE },
            gameboardSize: {
                width: ()=>{return _width},
                height: ()=>{return _height}
            }
        },
        set: {
            difficulty: {
                easy: () => { _difficulty = EASY },
                medium: () => { _difficulty = MEDIUM },
                hard: () => { _difficulty = HARD }
            },
            gameboardSize: {
                width: (width) => { _width = width },
                height: (height) => { _height = height }
            }
        },
    }
    return configObj;
}

const config = getConfigObj();
export default config;