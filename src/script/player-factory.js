function playerFactory(name, type = 'human') {
    let _games = 0;
    let _wins = 0;
    let _streak = 0;

    const player = {
        get: {
            name: () => { return name },
            type: () => { return type },
            games: () => { return _games },
            wins: () => { return _wins },
            streak: () => { return _streak }
        },
        gameWon: (wasWon) => {
            if (wasWon) {
                _wins++;
                _streak++;
            }
            else _streak = 0;
            _games++;
        }
    }
    return player;
}
export default playerFactory;
