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

function partTwo() {
    try {
        const data = fs.readFileSync('day_01/input.txt', 'utf8');

        const elfs = parseInput(data);
        const count = findThreeElfsWithMostCalories(elfs);
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

function findThreeElfsWithMostCalories(elfs) {
    let maxElfs = elfs.sort((firstElf, secondElf) => {
        if(firstElf.getCaloriesSum() > secondElf.getCaloriesSum()) {
            return -1;
        }
        return 1;
    });

    let sum = 0;
    for(let i = 0; i < 3; i++) {
        sum += maxElfs[i].getCaloriesSum();
    }

    return sum;
}

module.exports.partTwo = partTwo;
