const binarySearchTree = require("./binarySearchTree.js");
const { BinarySearchTree } = require("./binarySearchTree.js");

console.log(binarySearchTree);

const testBinarySearchTree = () => {
  describe("binarySearchTree:", () => {
    let binarySearchTree = new BinarySearchTree();

    binarySearchTree
      .insert(11)
      .insert(7)
      .insert(15)
      .insert(5)
      .insert(9)
      .insert(13)
      .insert(20)
      .insert(3)
      .insert(6)
      .insert(8)
      .insert(10)
      .insert(12)
      .insert(14)
      .insert(18)
      .insert(25);

    // binarySearchTree test
    test("11의 right의 right의 right는 25: ", () => {
      expect(binarySearchTree.root.right.right.right.key).toBe(25);
    });

    // in-order travsere test
    test("in-order traverse :", () => {
      let result = "";

      const callback = (key) => {
        result += `${key}->`;
      };

      binarySearchTree.inOrderTraverse(callback);
      expect(result).toBe(
        "3->5->6->7->8->9->10->11->12->13->14->15->18->20->25->"
      );
    });

    // pre-order traverse test
    test("pre-order traversee :", () => {
      let result = "";

      const callback = (key) => {
        result += `${key}->`;
      };

      binarySearchTree.preOrderTraverse(callback);
      expect(result).toBe(
        "11->7->5->3->6->9->8->10->15->13->12->14->20->18->25->"
      );
    });

    // post-order traverse test
    test("post-order traverse :", () => {
      let result = "";

      const callback = (key) => {
        result += `${key}->`;
      };

      binarySearchTree.postOrderTraverse(callback);
      expect(result).toBe(
        "3->6->5->8->10->9->7->12->14->13->18->25->20->15->11->"
      );
    });

    // min test
    test("min은 3 : ", () => {
      expect(binarySearchTree.min().key).toBe(3);
    });

    // max test
    test("max은 25 ", () => {
      expect(binarySearchTree.max().key).toBe(25);
    });

    // serach test
    test("18은 존재하고 23은 존재하지 않는다. ", () => {
      expect(binarySearchTree.search(18).key).toBe(18);
      expect(binarySearchTree.search(23)).toBe(null);
    });

    // remove test
    test("14 삭제: ", () => {
      expect(binarySearchTree.remove(14)).toBe(true);
      expect(binarySearchTree.search(14)).toBe(null);
    });
  });
};

(function main() {
  testBinarySearchTree();
})();
