class Game {
    constructor() {
        this.rounds = [];
    }

    addRound(newRound) {
        this.rounds.push(newRound);
    }

    getScoreSum() {
        let score = 0;
        for(let round of this.rounds) {
            score += round.getSum();
        }
        return score;
    }
}

module.exports.Game = Game;
