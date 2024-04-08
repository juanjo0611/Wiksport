class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  pushFront(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pushBack(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null;
    }
  }

  Empty() {
    return (this.head == null);
  }

  Find(value) {
    found = false;
    let curr;
    curr = this.head;
    while (curr.next != null && found == false) {
      if (curr.value == value) {
        found = true;
      }
      curr = curr.next;
    }
  }

  Delete(value) {
    if (this.Empty == true) {
      return false;
    }
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return false;
    } else {
      let curr, prev;
      curr = this.head;
      prev = this.head;
      while (curr.value != value) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      curr.next = null;
    }
  }

  updateValue(value, newvalue) {
    if (this.Empty == true) {
      return false;
    }
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return false;
    } else {
      let curr;
      curr = this.head;
      while (curr.value != value) {
        curr = curr.next;
      }

      curr.value = newvalue;
    }
  }

  popFront() {
    if (this.Empty == true) {
      return false;
    }
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return false;
    } else {
      let curr;
      curr = this.head;
      this.head = this.head.next;
      curr.next = null;
      return true;
    }
  }

  popBack() {
    if (this.Empty == true) {
      return false;
    }
    if (this.head.next == null) {
      head = null;
      this.tail = null;
      return false;
    } else {
      let curr, prev;
      curr = this.head;
      prev = this.head;
      while (curr.next != null) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      this.tail.next = null

    }
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }

}

export default LinkedList;
