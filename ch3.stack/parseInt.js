const { Stack } = require("./stack2.js");

function parseInt2(num, base) {
  let decNum = 0;
  let decArr = new Stack;

  for (let i = 0; i < num.length; i++) {
    let dec;
    let toNum = Number(num[i]);
    let ASC = num[i].charCodeAt(0);

    if (toNum !== NaN && toNum < 10) {
      dec = toNum;
    } else {
      if (ASC >= 65 && ASC <= 96) {
        dec = ASC - 55;
      } else if (ASC >= 97 && ASC <= 128) {
        dec = ASC - 87;
      } else {
        return NaN;
      }
    }
    decArr.push(dec);
  }
  
  for (let i = 0; i < decArr.size(); i++) {
    decNum += decArr.items[i] * Math.pow(base, decArr.size() - i - 1);
  }

  return decNum;
}

console.log(parseInt2("2b", 16));
