import LinkedList from "./LinkedList";

class Stack extends LinkedList {
  constructor() {
      super();
  }
  push(value){
      super.pushFront(value);
  }
  pop(){
      return super.popFront();
  }
  top(){
      return this.head.value;
  }
}
export default Stack;
