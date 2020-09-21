class ArrayList {
  constructor() {
    this.array = [];
    this.count = 0;
  }

  insert(item) {
    this.array.push(item);
  }

  swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  toString() {
    return this.array.join();
  }

  // 버블 정렬
  bubbleSort() {
    let length = this.array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        this.count++;
        if (this.array[i] > this.array[j]) {
          this.swap(i, j);
        }
      }
    }
  }

  // 선택 정렬
  selectionSort() {
    let { length } = this.array;

    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        this.count++;
        if (this.array[minIndex] > this.array[j]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        this.swap(minIndex, i);
      }
    }
  }

  insertionSort() {
    let { length } = this.array;

    for (let i = 1; i < length; i++) {
      let temp = this.array[i];
      let j;

      for (j = i; j > 0 && this.array[j - 1] > temp; j--) {
        this.count++;
        this.array[j] = this.array[j - 1];
      }

      this.array[j] = temp;
    }
  }
}

// Test

// 버블정렬
const arrayList = new ArrayList();
arrayList.insert(3);
arrayList.insert(5);
arrayList.insert(1);
arrayList.insert(4);
arrayList.insert(2);

arrayList.bubbleSort();
console.log(arrayList.toString());
console.log("count: ", arrayList.count);

// 선택정렬
const arrayList2 = new ArrayList();
arrayList2.insert(3);
arrayList2.insert(5);
arrayList2.insert(1);
arrayList2.insert(3);
arrayList2.insert(2);

arrayList2.selectionSort();
console.log(arrayList2.toString());
console.log("count: ", arrayList2.count);

// 삽입정렬
const arrayList3 = new ArrayList();
arrayList3.insert(3);
arrayList3.insert(5);
arrayList3.insert(1);
arrayList3.insert(4);
arrayList3.insert(2);

arrayList3.insertionSort();
console.log(arrayList3.toString());
console.log("count: ", arrayList3.count);
