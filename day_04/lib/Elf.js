class Elf {
    constructor(sectionStart, sectionEnd) {
        this.sections = [];

        for(let x = sectionStart; x <= sectionEnd; x++) {
            this.sections.push(x);
        }
    }
}

module.exports.Elf = Elf;
