// Welcome to Facebook!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!

// Node {
//   Int value;
//   Node next;
//   Node random;
//   Boolean visited;
// }

// ===========
// |        \|/
// 4 -> 6 -> 1 -> null

// How do you do a deep copy of this linked list ? (given head)

function deepCopyLinkedList(node, cloned) {
  node.visted = true;
  const queue = [[node, cloned]];
  let original = null;
  let created = null;
  while (queue.length !== 0) {
    const removed = queue.shift();
    original = removed[0];
    created = removed[1];

    if (original.next !== null) {
      if (node.visted !== true) {
        created.next = new Node(original.next.value);
        node.visted = true;
        queue.push([original.next, created.next]);
      } else {
        created.next = created.next;
      }
    }

    if (original.random !== null && node.visted !== true) {
      created.random = new Node(original.random.value);
      node.visted = true;
      queue.push([original.random, created.random]);
    }
  }
}

function main(tree) {
  // case 1: passing null

  if (tree === null) return null;
  const cloned = new Node(tree.value);
  deepCopyLinkedList(tree, cloned);
  return cloned;
}
