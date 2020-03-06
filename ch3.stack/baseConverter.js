const { Stack } = require("./stack2.js");

// 
function baseConverter(decNum, base) {
  let rems = new Stack(),
    binaryNumber = "" ;
  let over10 = ["A", "B", "C", "D", "E", "F","G","H","I","J"];

  return (function temp() {
    if (decNum === 0) {
      while (!rems.isEmpty()) {
        let lastElem = rems.pop();
        binaryNumber +=
          lastElem < 10 ? lastElem.toString() : over10[lastElem - 10];
      }

      return binaryNumber;
    }

    rems.push(Math.floor(decNum % base));
    decNum = Math.floor(decNum / base);
    return temp(decNum);
  })();
}

console.log(baseConverter(15, 2), parseInt("1111", 2));
console.log(baseConverter(15, 8), parseInt("17", 8));
console.log(baseConverter(15, 16), parseInt("F", 16));
console.log(baseConverter(51, 17), parseInt("30", 17));


