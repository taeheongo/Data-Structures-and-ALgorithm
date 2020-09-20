const { LinkedList } = require("./linkedList");

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
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

        while (index < position) {
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
}

// Test
// const linkedlist = new DoublyLinkedList();

// linkedlist.append(1);
// linkedlist.append(3);

// linkedlist.insertAt(1, 2);
// linkedlist.removeAt(2);
// console.log(linkedlist.toString());

module.exports = {
  DoublyLinkedList
}