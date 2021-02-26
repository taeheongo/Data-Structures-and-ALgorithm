import 'dart:math';

class ArrayList {
  List array;

  ArrayList(int size) {
    array = _init(size);
  }

  List _init(int size) {
    var l = [];
    for (var i = size - 1; i >= 0; i--) {
      l.add(i);
    }
    return l;
  }

  void insert(item) {
    array.add(item);
  }

  @override
  String toString() {
    return array.join();
  }

  void swap(i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // 버블 정렬
  void bubbleSort() {
    final length = array.length;

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }

  // 개선된 버블 정렬
  void modifiedBubbleSort() {
    final length = array.length;

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }

  // 선택정렬
  void selectionSort() {
    final length = array.length;

    for (var i = 0; i < length; i++) {
      var indexMin = i;
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }

      if (indexMin != i) {
        swap(indexMin, i);
      }
    }
  }

  // 삽입정렬
  void insertionSort() {
    final length = array.length;

    for (var i = 1; i < length; i++) {
      var j = i;
      var temp = array[j];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }

      array[j] = temp;
    }
  }

  // 병합정렬
  void mergeSort() {
    array = mergeSortRec(array);
  }

  List mergeSortRec(List list) {
    if (list.length == 1) {
      return list;
    }

    var mid = list.length ~/ 2;

    var left = list.sublist(0, mid);
    var right = list.sublist(mid, list.length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  }

  List merge(List left, List right) {
    var result = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] > right[ir]) {
        result.add(right[ir++]);
      } else {
        result.add(left[il++]);
      }
    }

    while (il < left.length) {
      result.add(left[il++]);
    }
    while (ir < right.length) {
      result.add(right[ir++]);
    }

    return result;
  }

  // 퀵정렬
  void quickSort() {
    quick(array, 0, array.length - 1);
  }

  void quick(List list, int left, int right) {
    int index;

    if (list.length > 1) {
      index = partition(list, left, right);

      if (left < index - 1) {
        // 인덱스가 left부터 index-1까지는 pivot보다 작거나 같음
        quick(list, left, index - 1);
      }

      if (index < right) {
        // 인덱스가 index부터 right까지는 pivot보다 작거나 같음
        quick(list, index, right);
      }
    }
  }

  int partition(List list, int left, int right) {
    var i = left;
    var j = right;
    var pivot = (left + right) ~/ 2;

    while (i <= j) {
      while (list[i] < pivot) {
        i++;
      }

      while (list[j] > pivot) {
        j--;
      }

      if (i <= j) {
        swapQuickSort(list, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  void swapQuickSort(List list, int i, int j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  int binarySearch(item) {
    quickSort();
    var i = 0;
    var j = array.length - 1;

    while (i <= j) {
      var mid = (i + j) ~/ 2;
      var element = array[mid];
      if (item < element) {
        j = mid - 1;
      } else if (item > element) {
        i = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
  }
}
