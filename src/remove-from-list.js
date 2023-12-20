const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
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

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

}

function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let head = l;
  //let parent = l;
  let current = l;
  let next_node = null;

  // убираем k у головного
  while (current == head) {
    if (current == null) {
      return l;
    }
    if (current.value === k) {
      //parent = current.next;
      head = current.next;
      //l.length--;
      current = current.next;
    }
    else {
      break;
    }    
  }

  // убираем k у всех, которые после головного
  while (current.next) {
    next_node = current.next;
    if (next_node.value === k) {
      current.next = next_node.next;
      //l.length--;
    }
    else {
      current = current.next;
    } 
    }

  return head;

}

function addItems() {
  console.log('\n  Add Items');

  list.add(3);
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

  // list.add(1);
  // list.add(2);
  // list.add(3);

  list.print();
}

function removeItems() {
  console.log('\n  Remove Items');

  console.log('   Before:');
  list.print();

  l = removeKFromList(list.head, 3);

  console.log('   After:');
  list.head = l;
  list.print();
}

let list = new List();

addItems();
removeItems();

module.exports = {
  removeKFromList
};
