class Node {
  constructor(value) {
      this.value = value
      this.left = null
      this.right = null
  }
}

export class Tree {
  constructor(arr) {
      let sortedArr = removeDuplicates(arr.sort((a, b) => a - b))
      this.root = this.buildTree(sortedArr) 
  }

  buildTree(arr) {
      if (arr.length === 0) {
          return null
      }
      let mid = Math.floor(arr.length / 2)
      let root = new Node(arr[mid])
      root.left = this.buildTree(arr.slice(0, mid))
      root.right = this.buildTree(arr.slice(mid + 1))
      return root
  }

  insert(value) {
      this.root = this.insertNode(this.root, value)
  }

  delete(value) {
      this.root = this.deleteNode(this.root, value)
  }

  insertNode(node, value) {
      if (node === null) {
          return new Node(value)
      }
      if (value < node.value) {
          node.left = this.insertNode(node.left, value)
      } else if (value > node.value) {
          node.right = this.insertNode(node.right, value)
      }
      return node
  }

  deleteNode(node, value) {
      if (node === null) {
          return null
      }
      if (value < node.value) {
          node.left = this.deleteNode(node.left, value)
      } else if (value > node.value) {
          node.right = this.deleteNode(node.right, value)
      } else {
          if (node.left === null && node.right === null) {
              node = null
          } else if (node.left === null) {
              node = node.right
          } else if (node.right === null) {
              node = node.left
          } else {
              let tempNode = this.findMinNode(node.right)
              node.value = tempNode.value
              node.right = this.deleteNode(node.right, tempNode.value)
          }
      }
      return node
  }

  find(value) {
      return this.findNode(this.root, value)
  }

  findNode(node, value) {
      if (node === null) {
          return null
      }
      if (value < node.value) {
          return this.findNode(node.left, value)
      } else if (value > node.value) {
          return this.findNode(node.right, value)
      } else {
          return node
      }
  }

  levelOrder(callback) {
    if (callback === undefined) {
        throw new Error("callback is required")
    }
    let queue = []
    let node = this.root
    queue.push(node)
    while (queue.length) {
        node = queue.shift()
        callback(node.value)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
  }

  inOrder(callback) {
    if (callback === undefined) {
        throw new Error("callback is required")
    }
    this.inOrderNode(this.root, callback)
  }

  inOrderNode(node, callback) {
    if (node !== null) {
        this.inOrderNode(node.left, callback)
        callback(node.value)
        this.inOrderNode(node.right, callback)
    }
  }

  preOrder(callback) {
    if (callback === undefined) {
        throw new Error("callback is required")
    }
    this.preOrderNode(this.root, callback)
  }

  preOrderNode(node, callback) {
    if (node !== null) {
        callback(node.value)
        this.preOrderNode(node.left, callback)
        this.preOrderNode(node.right, callback)
    }
  }

  postOrder(callback) {
    if (callback === undefined) {
        throw new Error("callback is required")
    }
    this.postOrderNode(this.root, callback)
  }

  postOrderNode(node, callback) {
    if (node !== null) {
        this.postOrderNode(node.left, callback)
        this.postOrderNode(node.right, callback)
        callback(node.value)
    }
  }

  height(node) {
    if (node === null) {
        return -1
    }
    let leftHeight = this.height(node.left)
    let rightHeight = this.height(node.right)
    if (leftHeight > rightHeight) {
        return leftHeight + 1
    } else {
        return rightHeight + 1
    }
  }

  depth(node, value) {
    if (node === null) {
        return -1
    }
    if (node.value === value) {
        return 0
    }
    let leftDepth = this.depth(node.left, value)
    if (leftDepth >= 0) {
        return leftDepth + 1
    }
    let rightDepth = this.depth(node.right, value)
    if (rightDepth >= 0) {
        return rightDepth + 1
    }
    return -1
  }

  isBalanced() {
    let leftHeight = this.height(this.root.left)
    let rightHeight = this.height(this.root.right)
    if (leftHeight - rightHeight <= 1 && leftHeight - rightHeight >= -1) {
        return true
    } else {
        return false
    }
  }

  rebalance() {
    let arr = []
    this.inOrder((value) => arr.push(value))
    this.root = this.buildTree(arr)
  }

}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

let b = removeDuplicates(arr.sort((a, b) => a - b))
console.log(b)