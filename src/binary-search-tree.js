const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.head = addWithin(this.head, data);
 
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.head, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithin(this.head, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }  
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) {
      return;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) {
      return;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

// function getRoot() {
//   //console.log(bst);
//   console.log('root', bst.root());
// }

// function getItems() {
//   console.log('\n  Get Items');

//   console.log('has 10', bst.has(10));
//   console.log('has 15', bst.has(15));

//   console.log('find 10', bst.find(10));
//   console.log('find 15', bst.find(15));
//   // console.log('\n', bst);

//   // console.log('  Left Traverse:');
//   // bst.leftTraverse((val) => console.log(val));

//   // console.log('  Right Traverse:');
//   // bst.rightTraverse((val) => console.log(val)); 

//    console.log('min:', bst.min());
//    console.log('max:', bst.max());
// }

// function removeItem() {
//   console.log('  Remove Item');

//   bst.remove(15);
//   console.log('remove 15');
//   console.log(bst);
//   console.log('has 15', bst.has(15));
// }

// const bst = new BinarySearchTree();

// bst.add(13);
// bst.add(15);
// bst.add(9);
// bst.add(20);
// bst.add(18);
// bst.add(32);
// bst.add(25);

// getRoot();
// getItems();
// removeItem();

module.exports = {
  BinarySearchTree
};