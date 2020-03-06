const { Stack } = require("./stack2.js");

const stack1 = new Stack();
const stack2 = new Stack();
const stack3 = new Stack();

stack1.push(3);
stack1.push(2);
stack1.push(1);

function hanoi(n, from, helper, to) {
  if (n !== 0) {
    hanoi(n - 1, from, to, helper);
    to.push(from.pop());
    console.log("stack1 :", stack1.toString());
    console.log("stack2 :", stack2.toString());
    console.log("stack3 :", stack3.toString());
    hanoi(n - 1, helper, from, to);
  }
}

hanoi(3, stack1, stack2, stack3);
