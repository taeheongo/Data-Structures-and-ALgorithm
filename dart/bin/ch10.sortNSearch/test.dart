import 'package:test/test.dart';
import './sortNSearch.dart';

void testBubbleSort() {
  group('bubblesort:', () {
    var l = ArrayList(5);

    test('before bubble sort: 4231', () {
      expect(l.toString(), '43210');
    });

    test('after bubblesort sort: 1234', () {
      l.bubbleSort();
      expect(l.toString(), '01234');
    });
  });
}

void testModifiedBubbleSort() {
  group('modified bubble sort:', () {
    var l = ArrayList(5);

    test('before modified bubble sort:', () {
      expect(l.toString(), '43210');
    });

    test('after modified bubble sort:', () {
      l.modifiedBubbleSort();
      expect(l.toString(), '01234');
    });
  });
}

void testSelectionSort() {
  group('selection sort: ', () {
    var l = ArrayList(5);

    test('before selection sort :', () {
      expect(l.toString(), '43210');
    });

    test('after selection sort: ', () {
      l.selectionSort();
      expect(l.toString(), '01234');
    });
  });
}

void testInsertionSort() {
  group('insertion sort: ', () {
    var l = ArrayList(5);

    test('before insertion sort :', () {
      expect(l.toString(), '43210');
    });

    test('after inserttion sort: ', () {
      l.selectionSort();
      expect(l.toString(), '01234');
    });
  });
}

void testMergeSort() {
  group('merge sort:', () {
    var l = ArrayList(10);

    test('before merge sort :', () {
      expect(l.toString(), '9876543210');
    });

    test('before merge sort :', () {
      l.mergeSort();
      expect(l.toString(), '0123456789');
    });
  });
}

void testQuickSort() {
  group('quick sort:', () {
    var l = ArrayList(10);

    test('before quick sort :', () {
      expect(l.toString(), '9876543210');
    });

    test('before quick sort :', () {
      l.quickSort();
      expect(l.toString(), '0123456789');
    });
  });
}

void testBinayrSearch() {
  test('binary search 7:', () {
    var l = ArrayList(10);
    expect(l.binarySearch(7), 7);
  });
}

void main() {
  // testBubbleSort();
  // testModifiedBubbleSort();
  // testSelectionSort();
  // testInsertionSort();
  // testMergeSort();
  // testQuickSort();
  // testBinayrSearch();
}
