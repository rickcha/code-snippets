class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);

  let leftNode = root.left;
  leftNode.left = new Node(4);
  leftNode.right = new Node(5);

  let rightNode = root.right;
  rightNode.left = new Node(6);
  rightNode.right = new Node(7);

  leftNode.left.left = new Node(8);
  leftNode.left.right = new Node(9);
  leftNode.right.left = new Node(10);
  leftNode.right.right = new Node(11);

  return root;
}
