// O(n)은 알고리즘의 복잡도와 알고리즘의 성능을 표현한 것.
// O표기법은 cpu사용량을 기준으로 알고리즘의 성능을 측정한다.

// O(1)
const printNum = (num) => {
  console.log(num);
};

// O(n)
const sequentialSearch = (array, elem) => {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === elem) {
      return i;
    }
  }
  return -1;
};

// O(n^2)
const bubbleSort = (array) => {
  const { length } = array;
  let count = 0;

  const swap = (i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  for (let i = 0; i < length; i++) {
    // 필요로 하는 비용 1
    count++;
    for (let j = 0; j < length - 1; j++) {
      // 필요로 하는 비용 1
      count++;
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  console.log(`cost for bubbleSort with input size ${length} is ${count}`);
};

bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
