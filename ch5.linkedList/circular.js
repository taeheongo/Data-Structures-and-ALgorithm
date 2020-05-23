class Node {
    constructor(element) {
        this.prev = null;
        this.next = null;
        this.element = element;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAt(position, element) {
        if (position >= 0 && position <= this.length) {
            const newNode = new Node(element);
            if (position === 0) {
                if (this.length === 0) {
                    this.head = newNode;
                    this.tail = newNode;
                } else {
                    this.head.prev = newNode;
                    newNode.next = this.head;
                    this.head = newNode;
                }
            } else if (position === this.length) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            } else {
                let currrent = this.head;
                let index = 0;
                while (index < position) {
                    currrent = currrent.next;
                    index++;
                }

                currrent.prev.next = newNode;
                newNode.prev = currrent.prev;
                newNode.next = currrent;
                currrent.prev = newNode;
            }
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.length++;
        } else {
            return null;
        }
    }

    removeAt(position) {
        if (position >= 0 && position < this.length) {
            if (position === 0) {
                if (this.length === 1) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head.next.prev = this.tail;
                    this.head = this.head.next;
                }
            } else if (position === this.length - 1) {
                this.tail.prev.next = this.head;
                this.tail = this.tail.prev;
            } else {
                let current = this.head;
                let index = 0;
                while (index < position) {
                    index++;
                    current = current.next;
                }

                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            this.length--;
            if (this.length >= 1) {
                this.head.prev = this.tail;
                this.tail.next = this.head;
            }
        } else {
            return null;
        }
    }

    toString() {
        let current = this.head;
        let string = '';

        do {
            if (current) {
                string += current.element
                current = current.next;
            } else {
                break;
            }
        } while (current.prev !== this.tail)

        return string;
    }
}
const cList = new CircularList();
cList.insertAt(0, 1);
cList.insertAt(1, 3);
cList.insertAt(1, 2);
console.log(cList.toString());

cList.removeAt(1);
console.log(cList.toString());
cList.removeAt(1);
console.log(cList.toString());
cList.removeAt(0);
console.log("removeAll:", cList.toString());
