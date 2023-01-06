const fs = require('fs');
const { Crate } = require('../lib/Crate');
const { Stack } = require('../lib/Stack');
const { Instruction } = require('../lib/Instruction');

function partTwo() {
    try {
        const data = fs.readFileSync('day_05/input.txt', 'utf8');

        const exerciseInput = parseInput(data);
        const count = simulateMovingCrates(exerciseInput);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function parseInput(data) {
    let lines = data.split("\n");
    let stacks = [];
    let instructions = [];
    let stackCompleted = false;

    lines.map(inputLine => {
        if(inputLine == "") {
            stackCompleted = true;
        }else{
            if(!stackCompleted && !inputLine.match(/\s{0,}\d\s{0,}/g)) {
                let inputStacks = inputLine.split("    ");
                let newInputStacks = [];
                for(let stack of inputStacks) {
                    let parts = stack.split(" ");
                    for(let partIndex in parts) {
                        parts[partIndex] = parts[partIndex].replace("[", "").replace("]", "")
                    }
                    newInputStacks.push(...parts);
                }

                for(let inputStackIndex in newInputStacks) {
                    if(!stacks[inputStackIndex]) {
                        stacks[inputStackIndex] = new Stack();
                    }

                    if(newInputStacks[inputStackIndex] !== "") {
                        stacks[inputStackIndex].addCrate(new Crate(newInputStacks[inputStackIndex]));
                    }
                }
            }

            if(stackCompleted) {
                instructions.push(new Instruction(inputLine))
            }
        }
    });

    return {stacks, instructions};
}

function simulateMovingCrates(input) {
    let {stacks, instructions} = input;

    for(let instruction of instructions) {
        moveCrate(instruction.amount, instruction.from, instruction.to, stacks);
    }

    let output = "";
    for(let stack of stacks) {
        output += stack.getTopCrate().load
    }
    return output;
}

function moveCrate(amount, from, to, stacks) {
    let crate = stacks[from - 1].removeAmountOfTopCrates(amount);
    stacks[to - 1].addCratesOnTop(crate);
}

module.exports.partTwo = partTwo;
