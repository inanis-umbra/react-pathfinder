import {default as AStarFinder} from './AStarFinder';

class DijkstraFinder {
    constructor(opt) {
        AStarFinder.call(this, opt);
        this.heuristic = function (dx, dy) {
            return 0;
        };
    }
}

DijkstraFinder.prototype = new AStarFinder();
DijkstraFinder.prototype.constructor = DijkstraFinder;

export default DijkstraFinder;
