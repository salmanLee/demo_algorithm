function Node() {
    this.data = null
    this.leftChild = null
    this.rightChild = null
}

function BinaryTree() {
    Node.call(this)
    this.root = null
}

// 实现继承
(function () {
    const F = function () { }
    F.prototype = Node.prototype
    BinaryTree.prototype = new F()
    BinaryTree.prototype.constructor = BinaryTree
})()

BinaryTree.prototype.insertNode = function (data) {
    if (this.root === null) {
        this.root = {}
        this.root.data = data
    } else {
        insertNode(this.root, data)
    }
}

BinaryTree.prototype.travelTree = function (root) { //前序遍历
    console.log(root.data)
    this.travelTree(root.leftChild)
    this.travelTree(root.rightChild)
}

export default BinaryTree;