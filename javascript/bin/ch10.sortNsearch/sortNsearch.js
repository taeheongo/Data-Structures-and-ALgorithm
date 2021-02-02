class ArrayList {
  constructor(size) {
    this._init(size);
  }

  _init(size) {
    this.array = [];
    for (let i = size - 1; i >= 0; i--) {
      this.array.push(i);
    }
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
    return this.array.join("");
  }

  // 버블 정렬
  bubbleSort() {
    const { length } = this.array;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  // 개선된 버블 정렬
  modifiedBubbleSort() {
    const { length } = this.array;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  // 선택 정렬
  selectionSort() {
    let { length } = this.array;

    for (let i = 0; i < length; i++) {
      let indexMin = i;
      for (let j = i; j < length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j;
        }
      }

      if (i !== indexMin) {
        this.swap(i, indexMin);
      }
    }
  }

  // 삽입정렬
  insertionSort() {
    let { length } = this.array;

    for (let i = 1; i < length; i++) {
      let j = i;
      let temp = this.array[i];
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1];
        j--;
      }

      this.array[j] = temp;
    }
  }

  // 병합정렬
  mergeSort() {
    this.array = this.mergeSortRec(this.array);
  }

  mergeSortRec(array) {
    const { length } = array;

    if (length === 1) {
      return array;
    }

    let mid = Math.floor(length / 2);

    let left = array.slice(0, mid);
    let right = array.slice(mid, length);

    return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
  }

  merge(left, right) {
    let il = 0,
      ir = 0,
      result = [];

    while (il < left.length && ir < right.length) {
      if (left[il] > right[ir]) {
        result.push(right[ir++]);
      } else {
        result.push(left[il++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
  }

  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }

  quick(array, left, right) {
    let index;

    if (array.length > 1) {
      index = this.partition(array, left, right);

      if (left < index - 1) {
        this.quick(left, index - 1);
      }

      if (index < right) {
        this.quick(index, right);
      }
    }
  }

  partition(array, left, right) {
    let i = left,
      j = right,
      pivot = Math.floor((right - left) / 2);

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this.swapQuickSort(array, i, j);
        i++;
        j--;
      }
    }
  }

  swapQuickSort(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  binarySearch(item) {
    this.quickSort();

    let low = 0,
      high = this.array.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2),
        elem = this.array[mid];

      if (item > elem) {
        low = mid + 1;
      } else if (item < elem) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}

module.exports = {
  ArrayList,
};
