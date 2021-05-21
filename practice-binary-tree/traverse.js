function traverseBfs(node) {
  if (node === null || node === undefined) return;
  const queue = [node];
  while (queue.length !== 0) {
    const item = queue.shift();
    if (item.left !== null) queue.push(item.left);
    if (item.right !== null) queue.push(item.right);
    console.log(item.value);
  }
}

function traversalPreOrder(node) {
  if (node === null) return;
  console.log(node.value);
  traversalPreOrder(node.left);
  traversalPreOrder(node.right);
}

function traversalPostOrder(node) {
  if (node === null) return;
  traversalPostOrder(node.left);
  traversalPostOrder(node.right);
  console.log(node.value);
}

function traverseOuter(node) {
  function traverseLeft(node, result) {
    if (node === null) return;
    result.push(node.value);
    traverseLeft(node.left, result);
  }

  function traverseBottom(node, result) {
    if (node === null) return;
    traverseBottom(node.left, result);
    traverseBottom(node.right, result);
    if (node.left === null && node.right === null) {
      result.push(node.value);
    }
  }

  function traverseRight(node, result) {
    if (node === null) return;
    traverseRight(node.right, result);
    result.push(node.value);
  }

  const result = [];
  traverseLeft(node, result);
  traverseBottom(node, result);
  traverseRight(node, result);
  return result;
}
