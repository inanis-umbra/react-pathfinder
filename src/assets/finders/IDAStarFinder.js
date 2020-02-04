import { Heuristic, Node, DiagonalMovement } from "../core";

export default class IDAStarFinder {
    constructor(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
        this.heuristic = opt.heuristic || Heuristic.manhattan;
        this.weight = opt.weight || 1;
        this.trackRecursion = opt.trackRecursion || false;
        this.timeLimit = opt.timeLimit || Infinity; // Default: no time limit.
        if (!this.diagonalMovement) {
            if (!this.allowDiagonal) {
                this.diagonalMovement = DiagonalMovement.Never;
            }
            else {
                if (this.dontCrossCorners) {
                    this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                }
                else {
                    this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                }
            }
        }
        // When diagonal movement is allowed the manhattan heuristic is not
        // admissible, it should be octile instead
        if (this.diagonalMovement === DiagonalMovement.Never) {
            this.heuristic = opt.heuristic || Heuristic.manhattan;
        }
        else {
            this.heuristic = opt.heuristic || Heuristic.octile;
        }
    }
    findPath(startX, startY, endX, endY, grid) {
        // Used for statistics:
        // eslint-disable-next-line no-unused-vars
        let nodesVisited = 0;
        // Execution time limitation:
        let startTime = new Date().getTime();
        // Heuristic helper:
        let h = function (a, b) {
            return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
        }.bind(this);
        // Step cost from a to b:
        let cost = function (a, b) {
            return a.x === b.x || a.y === b.y ? 1 : Math.SQRT2;
        };
        let search = function (node, g, cutoff, route, depth) {
            nodesVisited++;
            // Enforce timelimit:
            if (this.timeLimit > 0 &&
                new Date().getTime() - startTime > this.timeLimit * 1000) {
                // Enforced as "path-not-found".
                return Infinity;
            }
            let f = g + h(node, end) * this.weight;
            // We've searched too deep for this iteration.
            if (f > cutoff) {
                return f;
            }
            if (node === end) {
                route[depth] = [node.x, node.y];
                return node;
            }
            let min, t, k, neighbour;
            let neighbours = grid.getNeighbors(node, this.diagonalMovement); //Disable warning: Expected a conditional expression and instead saw an assignment
            // Sort the neighbours, gives nicer paths. But, this deviates
            // from the original algorithm - so I left it out.
            //neighbours.sort(function(a, b){
            //    return h(a, end) - h(b, end);
            //});
            /*jshint -W084 */ for (k = 0, min = Infinity; (neighbour = neighbours[k]); ++k) {
                /*jshint +W084 */ //Enable warning: Expected a conditional expression and instead saw an assignment
                if (this.trackRecursion) {
                    // Retain a copy for visualisation. Due to recursion, this
                    // node may be part of other paths too.
                    neighbour.retainCount = neighbour.retainCount + 1 || 1;
                    if (neighbour.tested !== true) {
                        neighbour.tested = true;
                    }
                }
                t = search(neighbour, g + cost(node, neighbour), cutoff, route, depth + 1);
                if (t instanceof Node) {
                    route[depth] = [node.x, node.y];
                    // For a typical A* linked list, this would work:
                    // neighbour.parent = node;
                    return t;
                }
                // Decrement count, then determine whether it's actually closed.
                if (this.trackRecursion && --neighbour.retainCount === 0) {
                    neighbour.tested = false;
                }
                if (t < min) {
                    min = t;
                }
            }
            return min;
        }.bind(this);
        // Node instance lookups:
        let start = grid.getNodeAt(startX, startY);
        let end = grid.getNodeAt(endX, endY);
        // Initial search depth, given the typical heuristic contraints,
        // there should be no cheaper route possible.
        let cutOff = h(start, end);
        let j, route, t;
        // With an overflow protection.
        for (j = 0; true; ++j) {
            route = [];
            // Search till cut-off depth:
            t = search(start, 0, cutOff, route, 0);
            // Route not possible, or not found in time limit.
            if (t === Infinity) {
                return [];
            }
            // If t is a node, it's also the end node. Route is now
            // populated with a valid path to the end node.
            if (t instanceof Node) {
                return route;
            }
            // Try again, this time with a deeper cut-off. The t score
            // is the closest we got to the end node.
            cutOff = t;
        }
        // This _should_ never to be reached.
        // eslint-disable-next-line no-unreachable
        return [];
    }
}

