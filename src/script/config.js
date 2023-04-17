const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';
const _MED_DIFFICULTY_SCALE = .66;


function getConfigObj() {
    let _difficulty = MEDIUM;
    const configObj = {
        get: {
            difficulty: () => { return _difficulty },
            mediumDifficultyScale: ()=>{return _MED_DIFFICULTY_SCALE},
        },
        set: {
            difficulty: {
                easy: () => { _difficulty = EASY },
                medium: () => { _difficulty = MEDIUM },
                hard: () => { _difficulty = HARD }
            },
        },
    }
    return configObj;
}

const config = getConfigObj();
export default config;