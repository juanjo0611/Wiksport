import LinkedList from "./LinkedList";

class Queue extends LinkedList{
  constructor() {
      super();
  }
  dequeue(){
      return super.popFront();
  }
  enqueue(value){
      return super.pushBack(value);
  }
  First(){
      return this.head.value;
  }
  Last(){
      return this.tail.value;
  }

}
export default Queue;