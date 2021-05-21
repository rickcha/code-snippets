function findCommonAncestor(node, value1, value2) {
  // termination condition
  const result = { count: 0, node: null };
  if (node === null) return result;

  // traversal
  const left = findCommonAncestor(node.left, value1, value2);
  if (left.node !== null) return left;
  const right = findCommonAncestor(node.right, value1, value2);
  if (right.node !== null) return right;

  // computation
  result.count = left.count + right.count;
  if ([value1, value2].includes(node.value)) result.count++;
  if (result.count === 2) result.node = node;
  return result;
}
