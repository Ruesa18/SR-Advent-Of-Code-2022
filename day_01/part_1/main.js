const fs = require('fs');

class Elf {
    constructor() {
        this.calories = [];
    }

    addCalories(calories) {
        this.calories.push(calories);
    }

    getCaloriesSum() {
        return this.calories.reduce((partialSum, calories) => partialSum + calories, 0);
    }
}

function partOne() {
    try {
        const data = fs.readFileSync('day_01/input.txt', 'utf8');

        const elfs = parseInput(data);
        const count = findElfWithMostCalories(elfs);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let elfs = [new Elf()];
    let lines = data.split("\n");

    lines.map(calories => {
        if(calories != "") {
            elfs[elfs.length - 1].addCalories(parseInt(calories));
        }else{
            elfs.push(new Elf());
        }
    });
    return elfs;
}

function findElfWithMostCalories(elfs) {
    let maxElf = elfs.reduce((lastMaxElf, elf) => {
        if(elf.getCaloriesSum() > lastMaxElf.getCaloriesSum()) {
            return elf;
        }
        return lastMaxElf;
    }, elfs[0])

    return maxElf.getCaloriesSum();
}

module.exports.partOne = partOne;
