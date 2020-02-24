class Stack {
  constructor() {
    this.items = [];
  }

  push(elem) {
    this.items.push(elem);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

function divdeBy2(decNum) {
  let remainder,
    rems = new Stack(),
    binaryNumber = "";

  while (decNum > 0) {
    remainder = Math.floor(decNum % 2);
    decNum = Math.floor(decNum / 2);
    rems.push(remainder);
  }
  rems.print();
  while (!rems.isEmpty()) {
    binaryNumber += rems.pop().toString();
  }

  return binaryNumber;
}
console.log(divdeBy2(5));

function divdeBy2_2nd(decNum) {
  let rems = new Stack();
  let binaryNumber = "";

  return (function temp() {
    if (decNum === 0) {
      while (!rems.isEmpty()) {
        binaryNumber += rems.pop().toString();
      }
      return binaryNumber;
    }
    rems.push(Math.floor(decNum % 2));
    decNum = Math.floor(decNum / 2);

    return temp(decNum);
  })();
}

console.log(divdeBy2_2nd(5));
