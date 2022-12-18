const fs = require('fs');
const { Group } = require('../lib/Group');
const { Rucksack } = require('../lib/Rucksack');

function partTwo() {
    try {
        const data = fs.readFileSync('day_03/input.txt', 'utf8');

        const groups = parseInput(data);
        const count = findBadgeSum(groups);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let lines = data.split("\n");
    let groups = [];

    lines.map((rucksackContentsInput, index) => {
        if(rucksackContentsInput != "") {
            let parts = rucksackContentsInput.match(new RegExp('.{1,' + (rucksackContentsInput.length / 2) + '}', 'g'));
            let rucksack = new Rucksack(parts[0], parts[1]);
            if(index % 3 == 0) {
                groups.push(new Group())
            }
            groups[groups.length - 1].addRucksack(rucksack);
        }else{
            console.warn("Read an empty Line")
        }
    });
    return groups;
}

function findBadgeSum(groups) {
    let groupsPriorities = [];

    for(let group of groups) {
        groupsPriorities.push(group.findBadge())
    }

    return groupsPriorities.reduce((partialSum, number) => partialSum + number);
}

module.exports.partTwo = partTwo;
