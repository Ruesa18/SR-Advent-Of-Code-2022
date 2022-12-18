const { Sign } = require("./Sign");

const SignEnum = {
    ROCK: new Sign("rock", "A", "X", 1, "scissors"),
    PAPER: new Sign("paper", "B", "Y", 2, "rock"),
    SCISSORS: new Sign("scissors", "C", "Z", 3, "paper")
}

module.exports.SignEnum = SignEnum;
