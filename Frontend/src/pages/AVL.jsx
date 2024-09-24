import TestList from "../services/Data Structures/test";
import AVL from "../services/Data Structures/AVL";
import MaxHeap from "../services/Data Structures/MaxHeap";
import MaxHeapLinkedList from "../services/Data Structures/MaxHeapLinkedList";

const COMP_AVL = () => {
  const avl = new AVL();
  const pq = new MaxHeapLinkedList();

  pq.push(100);
  pq.push(10);
  pq.push(50);
  pq.push(500);
  pq.push(-5.6);
  pq.push(-5);

  while (!pq.empty()) {
    console.log(pq.top());
    pq.pop();
  }
  
  return (
    <>
      <h1>{pq.top()}</h1>
    </>
  )
}
export default COMP_AVL;