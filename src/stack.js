const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackarr = new Array();
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.stackarr.push(element);
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.stackarr.length == 0)
    return undefined;
    return this.stackarr.pop();
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.stackarr[this.stackarr.length - 1];
  }
}

const stack = new Stack();

function addItems() {
  stack.push(1);
  stack.push(2);
  stack.push(3);  
}

function removeItems() {
  stack.pop();
  console.log(stack.stackarr.join(' '));
  let top = stack.peek();
  console.log(top); 
}

addItems();
removeItems();

module.exports = {
  Stack
};
