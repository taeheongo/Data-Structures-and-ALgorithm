class Node {
  var key;
  var left;
  var right;

  Node({this.key});
}

class BinarySearchTree {
  var root;

  void insert(dynamic key) {
    var newNode = Node(key: key);

    if (root == null) {
      root = newNode;
    } else {
      _insertNode(root, newNode);
    }
  }

  void _insertNode(Node node, Node newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        _insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        _insertNode(node.right, newNode);
      }
    }
  }

  /* in-order travase : 노드를 오름차순으로 순회 */
  void inOrderTraverse(Function callback) {
    _inOrderTraverseNode(root, callback);
  }

  void _inOrderTraverseNode(Node node, Function callback) {
    if (node != null) {
      _inOrderTraverseNode(node.left, callback);
      callback(node.key);
      _inOrderTraverseNode(node.right, callback);
    }
  }

  /* pre-order traverse : 자식노드보다 자신을 먼저 방문 */
  void preOrderTraverse(Function callback) {
    _preOrderTraverseNode(root, callback);
  }

  void _preOrderTraverseNode(Node node, Function callback) {
    if (node != null) {
      callback(node.key);
      _preOrderTraverseNode(node.left, callback);
      _preOrderTraverseNode(node.right, callback);
    }
  }

  /* post-order traverse : 자신보다 자식노드를 먼저 방문 */
  void postOrderTraverse(Function callback) {
    _postOrderTraverseNode(root, callback);
  }

  void _postOrderTraverseNode(Node node, Function callback) {
    if (node != null) {
      _postOrderTraverseNode(node.left, callback);
      _postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  Node min() {
    return _minNode(root);
  }

  Node _minNode(Node node) {
    if (node != null) {
      while (node.left != null) {
        node = node.left;
      }
      return node;
    }

    return null;
  }

  Node max() {
    return _maxNode(root);
  }

  Node _maxNode(Node node) {
    if (node != null) {
      while (node.right != null) {
        node = node.right;
      }
      return node;
    }
    return null;
  }

  Node search(key) {
    return _searchNode(root, key);
  }

  Node _searchNode(Node node, dynamic key) {
    if (node == null) return null;

    if (key < node.key) {
      return _searchNode(node.left, key);
    } else if (key > node.key) {
      return _searchNode(node.right, key);
    } else {
      return node;
    }
  }

  bool remove(key) {
    _removeNode(root, key);
    return search(key) == null ? true : false;
  }

  Node _removeNode(Node node, dynamic key) {
    if (node == null) {
      return null;
    }

    if (node.key > key) {
      node.left = _removeNode(node.left, key);
      return node;
    } else if (node.key < key) {
      node.right = _removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else if (node.left != null && node.right == null) {
        // node.left를 최고 노드로 하는 트리에서 key와 같은 값을 다 제거하고난 node.left를 넣어줌.
        node = _removeNode(node.left, key);
        return node;
      } else if (node.left == null && node.right != null) {
        // node.left를 최고 노드로 하는 트리에서 key와 같은 값을 다 제거하고난 node.left를 넣어줌.
        node = _removeNode(node.right, key);
        return node;
      } else {
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = _removeNode(node.right, aux.key);
        return node;
      }
    }
  }

  Node findMinNode(Node node) {
    return _minNode(node);
  }
}
