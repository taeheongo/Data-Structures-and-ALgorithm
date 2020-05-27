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

    inOrderTraverse() {
        inOrderTraverseNode(this.root, (value) => {
            console.log(value);
        })
    }

    preOrderTraverse() {
        preOrderTraverseNode(this.root, (value) => {
            console.log(value);
        })
    }

    postOrderTraverse() {
        postOrderTraverseNode(this.root, (value) => {
            console.log(value);
        })
    }

    min() {
        minNode(this.root, (value) => {
            console.log(value);
        })
    }

    max() {
        maxNode(this.root, (value) => {
            console.log(value);
        })
    }

    search(key) {
        return searchNode(this.root, key);
    }

    remove(key) {
        return removeNode(this.root, key);
    }
}

function removeNode(node, key) {
    if (!node) {
        return null;
    }

    if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node;
    } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node;
    } else {
        if (!node.left && !node.right) {
            node = null;
            return node;
        } else if (!node.right) {
            node = node.left;
            return node;
        } else if (!node.left) {
            node = node.right
            return node;
        } else {
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
}

function findMinNode(node){
    if(!node.left){
        return node;
    }
    return findMinNode(node.left);
}

function searchNode(node, key) {
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
}

function maxNode(node, callback) {
    if (node) {
        if (!node.right) {
            callback(node.key);
            return;
        }
        maxNode(node.right, callback)
    }
}

function minNode(node, callback) {
    if (node) {
        if (!node.left) {
            callback(node.key);
            return;
        }
        minNode(node.left, callback);
    }
}

function postOrderTraverseNode(node, callback) {
    if (node) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}

function preOrderTraverseNode(node, callback) {
    if (node) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}

function insertNode(node, newNode) {
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
}

function inOrderTraverseNode(node, callback) {
    if (!node) {
        return;
    }
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
}

let tree = new BinaryTree();

tree
    .insert(11)
    .insert(7)
    .insert(15)
    .insert(20)
    .insert(13)
    .insert(9)
    .insert(5)
    .insert(6)
    .insert(3)
    .insert(8)
    .insert(10)
    .insert(14)
    .insert(12)
    .insert(25)
    .insert(18);

// 중위순회
console.log('>>>>>>>>>>>in-order-traverse:')
tree.inOrderTraverse();

// 전위순회
console.log('>>>>>>>>>>>pre-order-traverse:')
tree.preOrderTraverse();

// 후위순회
console.log('>>>>>>>>>>>post-order-traverse:')
tree.postOrderTraverse();

console.log('>>>>>>>>>>>min:')
tree.min();

console.log('>>>>>>>>>>>max:')
tree.max();

console.log('>>>>>>>>>>>search:')
console.log(tree.search(14));

const tree2 = new BinaryTree();

tree2
    .insert(11)
    .insert(15)
    .insert(13)
    .insert(20)
    .insert(12)
    .insert(14)
    .insert(18)
    .insert(25)

console.log('>>>>>>>>>>>remove:')
console.log(tree2.remove(15));

console.log(tree2.inOrderTraverse())