const fs = require('fs');
const { Elf } = require("../lib/Elf");
const { Group } = require("../lib/Group");
const { Contained } = require("../lib/Contained");

function partTwo() {
    try {
        const data = fs.readFileSync('day_04/input.txt', 'utf8');

        const elfGroups = parseInput(data);
        const count = findOverlappingSum(elfGroups);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let lines = data.split("\n");
    let elfGroups = [];

    lines.map(elfsInput => {
        let inputElfs = elfsInput.split(",")
        let elfGroup = new Group();
        inputElfs.map(inputElf => {
            if(inputElf != "") {
                let inputSections = inputElf.split("-");
                let elf = new Elf(parseInt(inputSections[0]), parseInt(inputSections[1]));
                elfGroup.addElf(elf);
            }else{
                console.warn("Read an empty Line")
            }
        });
        elfGroups.push(elfGroup);
    });
    return elfGroups;
}

function findOverlappingSum(elfGroups) {
    let collisions = [];

    for(let group of elfGroups) {
        let contained = findContainedSections(group.elfs[0].sections, group.elfs[1].sections);

        if(contained.overlap.length > 0) {
            collisions = collisions.concat(contained);
        }
    }

    return collisions.length;
}

function findContainedSections(sectionsOne, sectionsTwo) {
    let collisions = [];

    if(sectionsOne == sectionsTwo) {
        return new Contained(sectionsOne, true);
    }

    let allContained = true;
    for(let sectionOne of sectionsOne) {
        let found = false;

        for(let sectionTwo of sectionsTwo) {
            if(sectionOne == sectionTwo) {
                collisions.push(sectionOne);
                found = true;
            }
        }

        if(!found){
            allContained = false;
        }
    }

    let allContainedTwo = true;
    for(let sectionTwo of sectionsTwo) {
        let found = false;

        for(let sectionOne of sectionsOne) {
            if(sectionOne == sectionTwo) {
                collisions.push(sectionOne);
                found = true;
            }
        }
        if(!found){
            allContainedTwo = false;
        }
    }

    return new Contained(collisions, allContained ? allContained : allContainedTwo);
}

module.exports.partTwo = partTwo;
