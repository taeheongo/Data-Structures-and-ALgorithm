const {
  removeNode,
  searchNode,
  maxNode,
  minNode,
  postOrderTraverseNode,
  preOrderTraverseNode,
  insertNode,
  inOrderTraverseNode,
} = require("./helpers");

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }

    return this;
  }
  // 중위 순회
  inOrderTraverse() {
    let values = [];
    inOrderTraverseNode(this.root, (value) => {
      values.push(value);
    });

    return values;
  }
  // 전위 순회
  preOrderTraverse() {
    let values = [];
    preOrderTraverseNode(this.root, (value) => {
      values.push(value);
    });
    return values;
  }
  // 후위 순회
  postOrderTraverse() {
    let values = [];
    postOrderTraverseNode(this.root, (value) => {
      values.push(value);
    });
    return values;
  }

  min() {
    let min;
    minNode(this.root, (value) => {
      min = value;
    });

    return min;
  }

  max() {
    let max;
    maxNode(this.root, (value) => {
      max = value;
    });

    return max;
  }

  search(key) {
    return searchNode(this.root, key);
  }

  remove(key) {
    return removeNode(this.root, key);
  }
}

let tree = new BinaryTree();

tree
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
  .insert(25)
  .insert(19);

console.log("중위 순회(inOrderTraverse): ");
console.log(tree.inOrderTraverse());

console.log("전위 순회(preOrderTraverse): ");
console.log(tree.preOrderTraverse());

console.log("후위 순회(postOrderTraverse): ");
console.log(tree.postOrderTraverse());

console.log("min: ", tree.min());
console.log("max: ", tree.max());

console.log("search(13): ", tree.search(13));

console.log("tree.remove(15): ", tree.remove(15));
console.log("tree.search(18):", tree.search(18));
