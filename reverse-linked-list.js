class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createList() {
  const root = new Node(0);
  let curr = root;
  for (let i = 1; i < 10; i++) {
    curr.next = new Node(i);
    curr = curr.next;
  }
  return root;
}

function reverse(node) {
  let prev = null;
  let curr = node;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function main() {
  const root = createList();
  // console.log(JSON.stringify(root, null, 4));
  console.log(JSON.stringify(reverse(root), null, 4));
}

main();
