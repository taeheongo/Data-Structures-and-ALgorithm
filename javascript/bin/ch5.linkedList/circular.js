const { DoublyLinkedList } = require("./doubly");

class Node {
  constructor(element) {
    this.prev = null;
    this.next = null;
    this.element = element;
  }
}

class CircularList extends DoublyLinkedList {
  constructor() {
    super();
  }

  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail = newNode;
    }

    this.length++;
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
          this.head = this.head.next;
        }
      } else if (position === this.length - 1) {
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

      if (
        this.length >= 1 &&
        (position === 0 || position === this.length - 1)
      ) {
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }

      this.length--;
    } else {
      return null;
    }
  }

  toString() {
    let current = this.head;
    let string = "";

    do {
      if (current) {
        string += current.element;
        current = current.next;
      } else {
        break;
      }
    } while (current.prev !== this.tail);

    return string;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    if (current) {
      do {
        if (current.element === element) {
          return index;
        }
        current = current.next;
        index++;
      } while (current !== this.head);
    }

    return -1;
  }
}

// Test
// const cList = new CircularList();
// cList.append(1);
// cList.append(2);
// cList.append(3);

// cList.insertAt(0, 0);
// cList.insertAt(4, 5);
// cList.insertAt(4, 4);

// cList.removeAt(5);
// cList.remove(2);

// console.log(cList.toString());
// console.log(cList.indexOf(4));

module.exports = {
  CircularList,
};
