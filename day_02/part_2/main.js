const fs = require('fs');
const { expectedResult } = require('../lib/ExpectedResultEnum');
const { Game } = require('../lib/Game');
const { Round } = require('../lib/Round');
const { SignHelper } = require('../lib/SignHelper');

function partTwo() {
    try {
        const data = fs.readFileSync('day_02/input.txt', 'utf8');

        const game = parseInput(data);
        const count = game.getScoreSum();
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let lines = data.split("\n");
    let game = new Game();

    lines.map(signsInput => {
        if(signsInput != "") {
            game.addRound(parseSigns(signsInput));
        }else{
            console.warn("Read an empty Line")
        }
    });
    return game;
}

function parseSigns(signsInput) {
    let signPair = signsInput.split(" ");
    let finalSignPair = [];

    finalSignPair[0] = SignHelper.findElfSign(signPair[0]);

    switch(signPair[1]) {
        case expectedResult.WIN:
            let beatingSign = SignHelper.findBeatingSign(finalSignPair[0]);
            finalSignPair[1] = beatingSign;
            break;
        case expectedResult.DRAW:
            finalSignPair[1] = finalSignPair[0];
            break;
        case expectedResult.LOST:
            finalSignPair[1] = SignHelper.findById(finalSignPair[0].beats);
            break;
        default:
            throw new Error("Player Sign Not Found");
    }
    return new Round(finalSignPair[0], finalSignPair[1]);
}

module.exports.partTwo = partTwo;
