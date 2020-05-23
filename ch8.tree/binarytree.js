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
    .insert(3)
    .insert(8)
    .insert(10)
    .insert(14)
    .insert(12)
    .insert(25)
    .insert(18);

console.log(tree);

tree.inOrderTraverse();