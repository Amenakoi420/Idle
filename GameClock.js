export default class GameClock {
    constructor() {
    }

    startTime = 0
    endTime = 0

    start() {
        startTime = performance.now();
    };

    end() {
        endTime = performance.now();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds
        var seconds = Math.round(timeDiff);
    }

}