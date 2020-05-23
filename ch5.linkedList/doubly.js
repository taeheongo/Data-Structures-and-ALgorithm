class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insertAt(position, element) {
        if (position > -1 && position <= this.length) {
            const newNode = new Node(element);

            if (position === 0) {
                if (this.head === null) {
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
                let index = 0;
                let current = this.head;
                while (index < position) {
                    current = current.next;
                    index++;
                }

                current.prev.next = newNode;
                newNode.prev = current.prev;
                newNode.next = current;
                current.prev = newNode;
            }

            this.length++;
        } else {
            return null;
        }
    }

    removeAt(position) {
        if (position > -1 && position < this.length) {
            if (position === 0) {
                if (this.length === 1) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                let index = 0;
                let current = this.head;
                
                while(index < position){
                    current = current.next;
                    index++;
                }

                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            this.length--;

        } else {
            return null;
        }
    }

    toString() {
        let string = '';
        let current = this.head;

        while (current) {
            string += current.element;
            current = current.next;
        }

        return string;
    }
}

const linkedlist = new DoublyLinkedList();

linkedlist.insertAt(0, 1);
linkedlist.insertAt(1, 2);
linkedlist.insertAt(0, 0);
linkedlist.insertAt(3, 3);

console.log(linkedlist.head, linkedlist.tail)
console.log(linkedlist.toString());

linkedlist.removeAt(0);
console.log(linkedlist.toString());

linkedlist.removeAt(1);
console.log(linkedlist.toString());

linkedlist.removeAt(1);
console.log(linkedlist.toString());

