import GainzCalculator from "./GainzCalculator.mjs"
import {getBench,getDeadlift,getPullUp,getSquat} from "./GainzCalculator.mjs"

const calculator = new GainzCalculator();
var gameIsRunning = true;

calculator.addStaticExerciseBonus("bench",100)
calculator.selectBench()


console.log(getBench().gainzPs)
console.log(calculator.gainzPs)




while (gameIsRunning){

}






document.getElementById("Gainz").innerHTML = 1;
var time = 1;
document.getElementById("Time").innerHTML = time;
var life = 24;
document.getElementById("Life").innerHTML = life;
var bossLevel = "Larry";
document.getElementById("BossLevel").innerHTML = bossLevel;
