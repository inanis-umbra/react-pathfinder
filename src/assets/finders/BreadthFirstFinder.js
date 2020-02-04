import {DiagonalMovement, Util} from '../core';

export default class BreadthFirstFinder {
    constructor(opt) {
        opt = opt || {};
        this.allowDiagonal = opt.allowDiagonal;
        this.dontCrossCorners = opt.dontCrossCorners;
        this.diagonalMovement = opt.diagonalMovement;
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
    }
    findPath(startX, startY, endX, endY, grid) {
        let openList = [], diagonalMovement = this.diagonalMovement, startNode = grid.getNodeAt(startX, startY), endNode = grid.getNodeAt(endX, endY), neighbors, neighbor, node, i, l;
        // push the start pos into the queue
        openList.push(startNode);
        startNode.opened = true;
        // while the queue is not empty
        while (openList.length) {
            // take the front node from the queue
            node = openList.shift();
            node.closed = true;
            // reached the end position
            if (node === endNode) {
                return Util.backtrace(endNode);
            }
            neighbors = grid.getNeighbors(node, diagonalMovement);
            for (i = 0, l = neighbors.length; i < l; ++i) {
                neighbor = neighbors[i];
                // skip this neighbor if it has been inspected before
                if (neighbor.closed || neighbor.opened) {
                    continue;
                }
                openList.push(neighbor);
                neighbor.opened = true;
                neighbor.parent = node;
            }
        }
        // fail to find the path
        return [];
    }
}

