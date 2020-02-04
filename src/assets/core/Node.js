
export default class Node {
    constructor(x, y, walkable) {
        this.x = x;
        this.y = y;
        this.walkable = (walkable === undefined ? true : walkable);
    }
}
