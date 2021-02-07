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

class BinarySearchTree {
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
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback);
  }
  // 전위 순회
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
  }
  // 후위 순회
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback);
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
    maxNode(this.root, (node) => {
      max = node;
    });

    return max;
  }

  search(key) {
    return searchNode(this.root, key);
  }

  remove(key) {
    removeNode(this.root, key);
    return !this.search(key);
  }
}

module.exports = {
  Node,
  BinarySearchTree,
};
