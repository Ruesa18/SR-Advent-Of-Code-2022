class Group {
    constructor() {
        this.rucksacks = [];
    }

    findBadge() {
        let rucksackContents = [];

        for(let rucksack of this.rucksacks) {
            rucksackContents.push(rucksack.getFullContent())
        }

        let candidates = [];
        for(let charElf1 of rucksackContents[0]) {
            for(let charElf2 of rucksackContents[1]){
                if(charElf1 == charElf2) {
                    candidates.push(charElf1);
                }
            }
        }

        for(let char of candidates) {
            for(let charElf3 of rucksackContents[2]) {
                if(char == charElf3) {
                    return this.rucksacks[0].convertLetterToPriority(charElf3);
                }
            }
        }

        return 0;
    }

    addRucksack(rucksack) {
        this.rucksacks.push(rucksack);
    }
}

module.exports.Group = Group;
