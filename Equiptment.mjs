export default class Equiptment {
    gainzPs = 0;
    stischeBonis = [];
    prozentualeBonis = [];

    constructor() {}

    addStatischeBonis(upgrade) {
        this.stischeBonis.push(upgrade)
    }

    addProzentualeBonis(upgrade) {
        this.prozentualeBonis.push(upgrade)
    }

    RechneGainzZusammen() {
        let statisch = 0;
        let prozentual = 1;
        for (let i = 0; i < this.stischeBonis.length; i++) {
            statisch += this.stischeBonis[i]
        }

        for (let i = 0; i < this.prozentualeBonis.length; i++) {
            prozentual = prozentual * this.prozentualeBonis[i]
        }

        this.gainzPs = statisch * prozentual
    }
}



