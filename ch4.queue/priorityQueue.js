const Queue = require("./queue.js");

class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    class QueueElement {
      constructor(element, priority) {
        this.element = element;
        this.priority = priority;
      }
    }

    const queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
            break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}

const pQueue1 = new PriorityQueue();
pQueue1.enqueue("a", 2);
pQueue1.enqueue("b", 1);
pQueue1.enqueue("c", 1);

console.log(pQueue1);
