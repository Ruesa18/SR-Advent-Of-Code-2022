const { SignEnum } = require("./SignEnum");

class SignHelper {
    static findElfSign(signInput) {
        switch(signInput) {
            case SignEnum.ROCK.elf:
                return SignEnum.ROCK;
            case SignEnum.PAPER.elf:
                return SignEnum.PAPER;
            case SignEnum.SCISSORS.elf:
                return SignEnum.SCISSORS;
            default:
                throw new Error("Elf Sign Not Found!");
        }
    }

    static findPlayerSign(signInput) {
        switch(signInput) {
            case SignEnum.ROCK.player:
                return SignEnum.ROCK;
            case SignEnum.PAPER.player:
                return SignEnum.PAPER;
            case SignEnum.SCISSORS.player:
                return SignEnum.SCISSORS;
            default:
                throw new Error("Player Sign Not Found!");
        }
    }

    static findById(id) {
        for(let signKey in SignEnum) {
            if(SignEnum[signKey].id == id) {
                return SignEnum[signKey];
            }
        }
        throw new Error("Sign Not Found!");
    }

    static findBeatingSign(signToBeat) {
        for(let signKey in SignEnum) {
            if(SignEnum[signKey].beats == signToBeat.id) {
                return SignEnum[signKey]
            }
        }
        throw new Error("No Beating Sign Found!");
    }
}

module.exports.SignHelper = SignHelper;
