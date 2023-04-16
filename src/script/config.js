const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';

function config() {
    let _difficulty = MEDIUM;
    const configObj = {
        get: {
            difficulty: () => { return _difficulty }
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
export default config;