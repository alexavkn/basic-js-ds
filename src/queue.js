const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {

    return this.head;

  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      // move to the last node
      while(current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }

    this.length++;

  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let current = this.head;
    this.head = current.next;
    current.next = null;
    return current.value;

  }

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

}

function addItems() {
  console.log('\n  Add Items');

  list.enqueue(3);
  list.enqueue(1);
  list.enqueue(2);
  list.enqueue(3);
  list.enqueue(4);
  list.enqueue(5);

  // list.enqueue(1);
  // list.enqueue(2);
  // list.enqueue(3);

  list.print();
}

function removeHead() {
  console.log('\n  Del Head');
  value = list.dequeue();
  console.log(value);
  console.log('\n  List print');
  list.print();
}

function getLast() {
  console.log('\n  Last print');
  value = list.getUnderlyingList();
  console.log(value);
}

let list = new Queue();

addItems();
removeHead();
getLast();

module.exports = {
  Queue
};
