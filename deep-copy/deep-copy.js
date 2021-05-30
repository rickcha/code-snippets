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

  return first;
}

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

// function deepCopyLinkedList(node, cloned) {
//   node.visted = true;
//   const queue = [[node, cloned]];
//   let original = null;
//   let created = null;
//   while (queue.length !== 0) {
//     const removed = queue.shift();
//     original = removed[0];
//     created = removed[1];

//     if (original.next !== null) {
//       if (node.visted !== true) {
//         created.next = new Node(original.next.value);
//         node.visted = true;
//         queue.push([original.next, created.next]);
//       } else {
//         created.next = created.next;
//       }
//     }

//     if (original.random !== null && node.visted !== true) {
//       created.random = new Node(original.random.value);
//       node.visted = true;
//       queue.push([original.random, created.random]);
//     }
//   }
// }

// function main(tree) {
//   // case 1: passing null

//   if (tree === null) return null;
//   const cloned = new Node(tree.value);
//   deepCopyLinkedList(tree, cloned);
//   return cloned;
// }

function deepCopy(node) {
  const visited = {};
  const copy = new Node(node.value);
  const queue = [[node, copy]];

  while (queue.length !== 0) {
    const [original, cloned] = queue.shift();
    visited[original.value] = cloned;

    let next;
    let random;
    if (original.next) {
      if (visited[original.next.value] === undefined) {
        next = new Node(original.next.value);
        queue.push([original.next, next]);
      } else {
        next = visited[original.next.value];
      }
      cloned.next = next;
    }
    if (original.random) {
      if (visited[original.random.value] === undefined) {
        random = new Node(original.random.value);
        queue.push([original.random, random]);
      } else {
        random = visited[original.random.value];
      }
      cloned.random = random;
    }
  }
}

function main() {
  const graph = createDirectedGraph();
  deepCopy(graph);

  const node1 = new Node(1);
  const node2 = new Node(2);

  const map = new Map();
  map.set(node1, 1);
  map.set(node2, 2);
  console.log(map.get(node2));
  console.log(map.get(node1));
}

main();
