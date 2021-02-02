const { Queue } = require("./queue.js");

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
   
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let isAdded = false;
      for (let i = 0; i < this.size(); i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          isAdded = true;
          break;
        }
      }
      if (!isAdded) {
        this.items.push(queueElement);
      }
    }
  }
}

const pQueue1 = new PriorityQueue();
pQueue1.enqueue("a", 4);
pQueue1.enqueue("b", 2);
pQueue1.enqueue("c", 1);

console.log(pQueue1.items);

module.exports = {
  Queue,
  QueueElement,
};
