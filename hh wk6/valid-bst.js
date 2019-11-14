/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

const tree = new BinaryTree(10);
tree.left = new BinaryTree(5);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(7);
tree.right = new BinaryTree(15);
tree.right.left = new BinaryTree(13);
tree.right.right = new BinaryTree(20);

const validBST = tree => {
  const array = [];
  const toArray = tree => {
    if (!tree) {
      return;
    }
    toArray(tree.left);
    array.push(tree.value);
    toArray(tree.right);
  };

  toArray(tree);

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }

  return true;
};

const validBST2ElectricBoogaloo = tree => {
  const array = [];

  const toArray = tree => {
    if (!tree) {
      return true;
    }
    const left = toArray(tree.left);
    if (!array.length) {
      array.push(tree.value);
    } else {
      if (tree.value > array[array.length - 1]) {
        array.push(tree.value);
      } else {
        return false;
      }
    }
    const right = toArray(tree.right);
    return left && right;
  };

  return toArray(tree);
}

console.log(validBST2ElectricBoogaloo(tree));