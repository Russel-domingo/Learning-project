// Create a node. It should have a attribute for the data it stores and its left and right children

class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }


}

class Tree {
    constructor(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        
        this.root = this.buildTree(sortedArray);
    }

    buildTree(array) {

        if (array.length === 0) {
            return null;
        }

        const middle = Math.floor(array.length / 2);

        const root = new Node(array[middle]);

        root.left = this.buildTree(array.slice(0, middle));
        root.right = this.buildTree(array.slice(middle + 1));

        return root;
    }

    includes(value) {

        let current = this.root;

        while (current != null) {
            if (current.data === value) {
                return true;
            }

            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            
        }
        return false;
    }

    insert(value) {
        let temp = new Node(value);
        if (this.root === null) {
            this.root = temp;
            return;
        }
        
        let current = this.root;

        while (current != null) {
            if (value < current.data && current.left != null) {
                current = current.left;
            } else if (value > current.data && current.right != null){
                current = current.right
            } else {
                break;
            }
        }
        if (value < current.data) {
            current.left = temp;

        } else {
            current.right = temp
        }

    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    findMin(node) {
        while (node.left != null) {
            node = node.left;
        }

        return node;
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.data) {
            node.left = this.deleteNode(node.left, value);
            return node;
        }

        if (value > node.data) {
            node.right = this.deleteNode(node.right, value)
            return node;
        }

        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        let successor = this.findMin(node.right);

        node.data = successor.data;

        node.right = this.deleteNode(node.right, successor.data);
        
        return node;
    }

    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        if (this.root === null) {
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            callback(current.data);

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }
    
    inOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        function traverse(node) {
            if (node === null) {
                return null
            }

            traverse(node.left);
            callback(node.data);
            traverse(node.right);
        }

        traverse(this.root);
    }

    preOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        function traverse(node) {
            if (node === null) {
                return null
            }

            callback(node.data);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
    }

    postOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        function traverse(node) {
            if (node === null) {
                return null
            }

            traverse(node.left);
            traverse(node.right);
            callback(node.data);
        }
        traverse(this.root);
    }

    height(value) {
        const node = this.find(value);

        if (node === null) {
            return undefined;
        }

        function getHeight(node) {
            if (node === null) {
                return - 1;
            }

            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }
        return getHeight(node);
    }

    find(value) {
        let current = this.root;
        
        while (current !== null) {
            if (current.data === value) {
                return current;
            }
            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right
            }
        }  
        return null
    }

    depth(value) {
        let current = this.root;
        let depth = 0;

        while (current !== null) {
            if (current.data === value) {
                return depth;
            }
            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            depth++;     
        }
        return undefined;
    }

    isBalanced() {

        function check(node) {

            if (node === null) {
                return true;
            }

            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return false;
            }

            return check(node.left) && check(node.right);
        }

        function getHeight(node) {

            if (node === null) {
                return -1;
            }

            return Math.max(
                getHeight(node.left),
                getHeight(node.right)
            ) + 1;
        }

        return check(this.root);
    }

    rebalance() {
        const values = [];

        this.inOrderForEach(value => values.push(value));

        this.root = this.buildTree(values);
    }
}

export default Tree;