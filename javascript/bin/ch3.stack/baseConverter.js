const { Stack } = require("./stack.js");

// parseInt() function
function baseConverter(decNum, base) {
  let rems = new Stack(),
    binaryNumber = "";

  return (function temp() {
    if (decNum === 0) {
      while (!rems.isEmpty()) {
        let lastElem = rems.pop();
        binaryNumber +=
          lastElem < 10
            ? lastElem.toString()
            : String.fromCharCode(65 + lastElem - 10);
      }

      return binaryNumber;
    }

    rems.push(Math.floor(decNum % base));
    decNum = Math.floor(decNum / base);
    return temp();
  })();
}

// Test
// console.log(baseConverter(15, 2), parseInt("1111", 2));
// console.log(baseConverter(15, 8), parseInt("17", 8));
// console.log(baseConverter(15, 16), parseInt("F", 16));
// console.log(baseConverter(51, 17), parseInt("30", 17));
// console.log(String.fromCharCode(65))

module.exports = {
  baseConverter,
};
