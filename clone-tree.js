var copyRandomList = function (head) {
  let visited = new Map();

  function recur(node) {
    if (!node) return null;
    if (visited.has(node)) return visited.get(node);

    let newNode = new Node(node.val);

    visited.set(node, newNode);

    newNode.next = recur(node.next);
    newNode.random = recur(node.random);

    return newNode;
  }

  return recur(head);
};
