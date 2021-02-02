const { ArrayList } = require("./sortNsearch");

const testBubbleSort = () => {
  describe("bubble sort:", () => {
    let l = new ArrayList(5);
    test("before bubble sort:", () => {
      expect(l.toString()).toBe("43210");
    });

    test("after bubble sort", () => {
      l.bubbleSort();
      expect(l.toString()).toBe("01234");
    });
  });
};

const testModifiedBubbleSort = () => {
  describe("modified bubble sort:", () => {
    let l = new ArrayList(5);
    test("before modified bubble sort:", () => {
      expect(l.toString()).toBe("43210");
    });

    test("after modified bubble sort", () => {
      l.modifiedBubbleSort();
      expect(l.toString()).toBe("01234");
    });
  });
};

const testInsertionSort = () => {
  describe("insertion sort:", () => {
    let l = new ArrayList(5);
    test("before insertion sort:", () => {
      expect(l.toString()).toBe("43210");
    });

    test("after insertion sort", () => {
      l.insertionSort();
      expect(l.toString()).toBe("01234");
    });
  });
};

const testMergeSort = () => {
  describe("merge sort:", () => {
    let l = new ArrayList(10);
    test("before mrege sort:", () => {
      expect(l.toString()).toBe("9876543210");
    });

    test("after merge sort", () => {
      l.mergeSort();
      expect(l.toString()).toBe("0123456789");
    });
  });
};

const testQuickSort = () => {
  describe("quick sort:", () => {
    let l = new ArrayList(10);
    test("before quick sort:", () => {
      expect(l.toString()).toBe("9876543210");
    });

    test("after quick sort", () => {
      l.quickSort();
      expect(l.toString()).toBe("0123456789");
    });
  });
};

const testBinarySearch = () => {
  test("binary search 7:", () => {
    let l = new ArrayList(10);
    expect(l.binarySearch(7)).toBe(7);
  });
};

(function main() {
  //   testBubbleSort();
  //   testModifiedBubbleSort();
  //   testInsertionSort();
  //   testMergeSort();
  //   testQuickSort();
  testBinarySearch();
})();
