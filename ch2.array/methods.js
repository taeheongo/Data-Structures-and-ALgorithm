// concat, every, filter, forEach, join, indexOf, lastIndexOf, map, reverse, slice, some, sort, toString, valueOf

// concat
let arr = [1, 2, 3];
let arr2 = [-1, 2, -3];
console.log(arr.concat(arr2));

// tell me is even or not!
function isEven(x) {
  return x % 2 == 0 ? true : false;
}

// sort
// sort() will convert elements in arr to ASCII characters
arr = [1, 2, 3, 10, 9, 8, 7, 4, 5, 6];
console.log(arr.sort()); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

arr = [1, -1, 0];
console.log(arr.sort()); // [-1, 0, 1]

function compare(a, b) {
  return a - b;
}

console.log(arr.sort(compare));

function compare2(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
}
console.log(arr.sort(compare2));

arr = ["apple", "banana", "Apple"];
console.log(arr.sort()); // [ 'Apple', 'apple', 'banana' ]

