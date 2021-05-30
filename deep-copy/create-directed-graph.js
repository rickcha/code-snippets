class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.random = null;
  }
}

function createDirectedGraph() {
  const first = new Node(1);
  const second = new Node(2);
  const third = new Node(3);
  const fourth = new Node(4);

  first.next = second;
  second.next = third;
  third.next = fourth;

  first.random = third;
  second.random = third;
  third.random = second;
  fourth.random = first;

  return root;
}

export { Node, createDirectedGraph };
