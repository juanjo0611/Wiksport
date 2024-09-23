class Node {
  constructor({ value }) {
    this.val = value;
    this.next = null;
  }
}

class TestList {
  constructor() {
    this.head = null;
  }

  createNode(value) {
    const new_node = new Node({ value });
    return new_node;
  }
  push_front(v) {
    const node = this.createNode(v);
    node.next = this.head;
    this.head = node;
  }
  get_head() {
    if (head === null) return null;
    return head.val;
  }
  print() {
    let cur = this.head;
    while (cur !== null) {
      console.log(cur.val);
      cur = cur.next;
    }
  }
}

export default TestList;