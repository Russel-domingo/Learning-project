import Tree from "./BSF.js";

// Generate an array of random numbers
function randomArray(size = 15) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

const numbers = randomArray();

console.log("Random Array:");
console.log(numbers);

const tree = new Tree(numbers);

console.log("\nBalanced?");
console.log(tree.isBalanced());

console.log("\nLevel Order:");
tree.levelOrderForEach(value => console.log(value));

console.log("\nPre Order:");
tree.preOrderForEach(value => console.log(value));

console.log("\nPost Order:");
tree.postOrderForEach(value => console.log(value));

console.log("\nIn Order:");
tree.inOrderForEach(value => console.log(value));

console.log("\nAdding numbers greater than 100...");

tree.insert(101);
tree.insert(110);
tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);

console.log("\nBalanced?");
console.log(tree.isBalanced());

console.log("\nRebalancing tree...");
tree.rebalance();

console.log("\nBalanced?");
console.log(tree.isBalanced());

console.log("\nLevel Order:");
tree.levelOrderForEach(value => console.log(value));

console.log("\nPre Order:");
tree.preOrderForEach(value => console.log(value));

console.log("\nPost Order:");
tree.postOrderForEach(value => console.log(value));

console.log("\nIn Order:");
tree.inOrderForEach(value => console.log(value));