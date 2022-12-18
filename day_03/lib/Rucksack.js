class Rucksack {
    constructor(itemsCompartment1, itemsCompartment2) {
        this.compartments = [];
        this.compartments.push(itemsCompartment1, itemsCompartment2);
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }

    getFullContent() {
        return this.compartments[0] + this.compartments[1];
    }

    findPriority() {
        let duplicateLetter = this.findDuplicates();
        return this.convertLetterToPriority(duplicateLetter);
    }

    findDuplicates() {
        for(let charCompartment1 of this.compartments[0]) {
            for(let charCompartment2 of this.compartments[1]){
                if(charCompartment1 == charCompartment2) {
                    return charCompartment1;
                }
            }
        }
    }

    convertLetterToPriority(letter) {
        for(let index in this.alphabet) {
            if(this.alphabet[index] == letter) {
                return parseInt(index) + 1;
            }
        }
        return 0;
    }
}

module.exports.Rucksack = Rucksack;
