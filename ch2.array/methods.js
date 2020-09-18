// concat, every, filter, forEach, join, indexOf, lastIndexOf, map, reverse, slice, some, sort, toString, valueOf

// concat
let arr = [1, 2, 3];
let arr2 = [-1, 2, -3];
console.log("concat: ", arr.concat(arr2));

// tell me is even or not!
function isEven(x) {
  return x % 2 == 0 ? true : false;
}

// sort
// Specifies a function that defines the sort order.
// If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
arr = [1, 2, 3, 10, 9, 8, 7, 4, 5, 6];
console.log(arr.sort()); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

function compare(a, b) {
  return a - b;
}
// Ascending order
console.log("Ascending order: ", arr.sort(compare));

function compare2(a, b) {
  return b-a;
}

// Descending order
console.log("Descending order: ", arr.sort(compare2));

// ASCII 인코딩은 UTF-8의 부분 집합이다. 일반적인 ASCII 문자열은 올바른 UTF-8 문자열이며, 따라서 하위 호환성이 보장된다
// 참조: https://ko.wikipedia.org/wiki/UTF-8
arr = ["apple", "banana", "Apple"];
console.log(arr.sort()); // [ 'Apple', 'apple', 'banana' ]

// toString
console.log("toString: ", arr.toString());
