import {default as BiAStarFinder} from './BiAStarFinder';
class BiDijkstraFinder {
    constructor(opt) {
        BiAStarFinder.call(this, opt);
        this.heuristic = function (dx, dy) {
            return 0;
        };
    }
}

BiDijkstraFinder.prototype = new BiAStarFinder();
BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

export default BiDijkstraFinder;
