class Stack {
    constructor() {
        this.crates = [];
    }

    addCrate(newCrate) {
        this.crates.push(newCrate);
    }

    addCrateOnTop(newCrate) {
        this.crates.unshift(newCrate);
    }

    addCratesOnTop(newCrates) {
        this.crates = [...newCrates, ...this.crates];
    }

    getTopCrate() {
        return this.crates[0];
    }

    removeTopCrate() {
        return this.crates.splice(0, 1)[0];
    }

    removeAmountOfTopCrates(amount) {
        return this.crates.splice(0, amount);
    }
}

module.exports.Stack = Stack;
