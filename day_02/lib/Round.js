const { roundResult } = require("./RoundResultEnum");

class Round {
    constructor(signElf, signPlayer) {
        this.signElf = signElf;
        this.signPlayer = signPlayer;
        this.result = this.getWinState();
    }

    getSum() {
        return this.signPlayer.score + this.result;
    }

    getWinState() {
        if(this.signPlayer.beats == this.signElf.id) {
            return roundResult.WIN;
        }
        if(this.signPlayer == this.signElf) {
            return roundResult.DRAW;
        }
        return roundResult.LOST;
    }
}

module.exports.Round = Round;
