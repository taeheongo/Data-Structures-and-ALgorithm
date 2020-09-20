// Stack Class
function Stack() {
  let items = [];

  this.push = function (elem) {
    items.push(elem);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };
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
// console.log(divdeBy2(5));

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

    return temp();
  })();
}

// console.log(divdeBy2_2nd(10));

module.exports = {
  Stack,
};
