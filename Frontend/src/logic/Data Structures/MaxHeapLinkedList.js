class Node {
  constructor({ value }) {
    this.val = value;
    this.next = null
  }
}

class MaxHeapLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  empty() {
    return (this.length === 0);
  }

  push(value) {
    const newNode = new Node({ value });
    if (this.length === 0) this.head = newNode;
    else if (value > this.head.val) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      let cur = this.head;
      while (cur.next !== null && cur.next.val > value) cur = cur.next;
      newNode.next = cur.next;
      cur.next = newNode
    }
    ++this.length;
  }
  pop() {
    if (this.length === 0) return;
    this.head = this.head.next;
    --this.length;
  }
  top() {
    if (this.length === 0) return null;
    return this.head.val;
  }
}
export default MaxHeapLinkedList;
