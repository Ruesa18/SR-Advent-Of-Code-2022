const fs = require('fs');
const { Rucksack } = require("../lib/Rucksack");

function partOne() {
    try {
        const data = fs.readFileSync('day_03/input.txt', 'utf8');

        const rucksacks = parseInput(data);
        const count = findPrioritySum(rucksacks);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let lines = data.split("\n");
    let rucksacks = [];

    lines.map(rucksackContentsInput => {
        if(rucksackContentsInput != "") {
            let parts = rucksackContentsInput.match(new RegExp('.{1,' + (rucksackContentsInput.length / 2) + '}', 'g'));
            let rucksack = new Rucksack(parts[0], parts[1]);
            rucksacks.push(rucksack);
        }else{
            console.warn("Read an empty Line")
        }
    });
    return rucksacks;
}

function findPrioritySum(rucksacks) {
    let priorities = [];

    for(let rucksack of rucksacks) {
        priorities.push(rucksack.findPriority());
    }

    return priorities.reduce((partialSum, number) => partialSum + number);
}

module.exports.partOne = partOne;
