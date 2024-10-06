import { Tree, prettyPrint } from "./build-tree.js"

function generateRandomArray(length = 100) {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

let arr = generateRandomArray(1000)
let tree = new Tree(arr)
console.log("\n\n\nTREE ROOT: " + tree.root.value)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())

console.log("\n\n\nPRE ORDER")
console.log("__________")
console.log(tree.preOrder((value) => console.log(value)))
console.log("\n\n\nPOST ORDER")
console.log("__________")
console.log(tree.postOrder((value) => console.log(value)))
console.log("\n\n\nIN ORDER")
console.log("__________")
console.log(tree.inOrder((value) => console.log(value)))
console.log("\n\n\nPRETTY PRINT")
console.log("__________")
console.log(prettyPrint(tree.root))

// ADD NUMBERS

console.log("\n\n\nADD NUMBERS")
console.log("__________")
tree.insert(140)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(120)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(200)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(110)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(150)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(132)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())
tree.insert(132)
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())

// REBALANCE

console.log("\n\n\nREBALANCE")
console.log("__________")
tree.rebalance()
console.log("\n\n\nIS BALANCED: " + tree.isBalanced())


console.log("\n\n\nPRE ORDER")
console.log("__________")
console.log(tree.preOrder((value) => console.log(value)))
console.log("\n\n\nPOST ORDER")
console.log("__________")
console.log(tree.postOrder((value) => console.log(value)))
console.log("\n\n\nIN ORDER")
console.log("__________")
console.log(tree.inOrder((value) => console.log(value)))
console.log("\n\n\nPRETTY PRINT")
console.log("__________")
console.log(prettyPrint(tree.root))