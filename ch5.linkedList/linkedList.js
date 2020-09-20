class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }
  insertAt(position, element) {
    if (position > -1 && position <= this.length) {
      const newNode = new Node(element);

      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      }else {
        let index = 0;
        let previous;
        let current = this.head;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = newNode;
        newNode.next = current;
      }

      this.length++;
    } else {
      return null;
    }
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = this.head.next;
      } else {
        let index = 0;
        let current = this.head;
        let previous;

        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = current.next;
      }

      this.length--;
    } else {
      return null;
    }
  }
  indexOf(element) {
    let current = this.head;
    let index = -1;

    while (current) {
      index++;
      if (current.element === element) {
        return index;
      }
      current = current.next;
    }

    return -1;
  }
  remove(element) {
    let index = this.indexOf(element);
    this.removeAt(index);
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }
}
// ----------test

// const linkedlist = new LinkedList();

// linkedlist.append(1);
// linkedlist.append(2);

// console.log("linkedlist:", linkedlist);

// linkedlist.insertAt(0, 0);
// linkedlist.insertAt(1, 1);
// linkedlist.insertAt(4, 4);

// console.log(linkedlist.toString())

// linkedlist.removeAt(1);

// linkedlist.remove(1);
// console.log(linkedlist.toString());

module.exports = {
    LinkedList
}
