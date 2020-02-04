import {default as BiAStarFinder} from './BiAStarFinder';


class BiBestFirstFinder {
    constructor(opt) {
        BiAStarFinder.call(this, opt);
        let orig = this.heuristic;
        this.heuristic = function (dx, dy) {
            return orig(dx, dy) * 1000000;
        };
    }
}

BiBestFirstFinder.prototype = new BiAStarFinder();
BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

export default BiBestFirstFinder;
