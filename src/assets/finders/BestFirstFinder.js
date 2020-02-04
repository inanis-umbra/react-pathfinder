import {default as AStarFinder} from './AStarFinder';

class BestFirstFinder {
    constructor(opt) {
        AStarFinder.call(this, opt);
        let orig = this.heuristic;
        this.heuristic = function (dx, dy) {
            return orig(dx, dy) * 1000000;
        };
    }
}

BestFirstFinder.prototype = new AStarFinder();
BestFirstFinder.prototype.constructor = BestFirstFinder;

export default BestFirstFinder;
