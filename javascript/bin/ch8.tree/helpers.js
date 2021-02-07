const insertNode = (node, newNode) => {
  if (node.key < newNode.key) {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  } else {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  }
};

const removeNode = (node, key) => {
  if (!node) {
    return null;
  }

  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    if (!node.left && !node.right) {
      node = null;
      return node;
    } else if (node.left && !node.right) {
      node = node.left;
      return node;
    } else if (!node.left && node.right) {
      node = node.right;
      return node;
    } else {
      let aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  }
};

const findMinNode = (node) => {
  if (!node.left) {
    return node;
  }
  return findMinNode(node.left);
};

const searchNode = (node, key) => {
  if (node) {
    if (node.key === key) {
      return node;
    } else if (key < node.key) {
      return searchNode(node.left, key);
    } else {
      return searchNode(node.right, key);
    }
  }
  return null;
};

const maxNode = (node, callback) => {
  if (node) {
    if (!node.right) {
      callback(node);
      return;
    }
    maxNode(node.right, callback);
  }
};

const minNode = (node, callback) => {
  if (node) {
    if (!node.left) {
      callback(node);
      return;
    }
    minNode(node.left, callback);
  }
};
// 중위 순회
const inOrderTraverseNode = (node, callback) => {
  if (!node) {
    return;
  }
  inOrderTraverseNode(node.left, callback);
  callback(node.key);
  inOrderTraverseNode(node.right, callback);
};

// 전위 순회
const preOrderTraverseNode = (node, callback) => {
  if (node) {
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
};

// 후위 순회
const postOrderTraverseNode = (node, callback) => {
  if (node) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
};

module.exports = {
  insertNode,
  removeNode,
  findMinNode,
  searchNode,
  maxNode,
  minNode,
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode,
};
