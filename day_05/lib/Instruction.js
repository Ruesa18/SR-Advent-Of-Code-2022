class Instruction {
    constructor(instruction) {
        this.instruction = instruction;
        let digits = [...instruction.matchAll(/\d{1,}/g)]
        this.amount = digits[0][0];
        this.from = digits[1][0];
        this.to = digits[2][0];
    }
}

module.exports.Instruction = Instruction;
