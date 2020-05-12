import Equiptment from "./Equiptment.mjs"


const bench = new Equiptment();
const squat = new Equiptment();
const deadLift = new Equiptment();
const pullUp = new Equiptment();


export default class GainzCalculator {

    totalGainz = 0
    gainzPs = 0
    globalBonis = [1]

    constructor() {
    }

    selectExercise(exercise) {
        if (exercise == "bench") {
            this.selectBench()
        }
        if (exercise == "squat") {
            this.selectSquat()
        }
        if (exercise == "deadlift") {
            this.selectDeadLift()
        }
        if (exercise == "pullup") {
            this.selectPullUp()
        }
    }

    selectBench() {
        bench.RechneGainzZusammen()
        this.gainzPs = bench.gainzPs * this.rechneGlobalBonisZusammen()
    }

    selectSquat() {
        squat.RechneGainzZusammen()
        this.gainzPs = squat.gainzPs * this.rechneGlobalBonisZusammen()
    }

    selectDeadLift() {
        deadLift.RechneGainzZusammen()
        this.gainzPs = deadLift.gainzPs * this.rechneGlobalBonisZusammen()
    }

    selectPullUp() {
        pullUp.RechneGainzZusammen()
        this.gainzPs = pullUp.gainzPs * this.rechneGlobalBonisZusammen()
    }

    rechneGlobalBonisZusammen() {
        let tempBonis = 1
        for (let i = 0; i < this.globalBonis.length; i++) {
            tempBonis *= this.globalBonis[i]
            return tempBonis
        }
    }

    addStaticExerciseBonus(exercise,bonus){
        if (exercise == "bench"){
            bench.addStatischeBonis(bonus)
        }
        if (exercise == "pullUp"){
            pullUp.addStatischeBonis(bonus)
        }
        if (exercise == "squat"){
            squat.addStatischeBonis(bonus)
        }
        if (exercise == "deadLift"){
            deadLift.addStatischeBonis(bonus)
        }
    }

    addStaticExerciseBonus
}

export function getBench() {
    return bench
}
export  function getDeadlift() {
    return deadLift
}
export function getSquat() {
    return squat
}
export function getPullUp() {
    return pullUp
}
