export const areAllNodesConnected = (nodes, edges) => {
  if (nodes.length === 0) return true;

  const nodeIds = nodes.map((node) => node.id);
  const adjList = new Map(nodeIds.map((id) => [id, []]));

  edges.forEach((edge) => {
    adjList.get(edge.source).push(edge.target);
    adjList.get(edge.target).push(edge.source);
  });

  const visited = new Set();
  const stack = [nodeIds[0]];

  while (stack.length > 0) {
    const nodeId = stack.pop();
    if (!visited.has(nodeId)) {
      visited.add(nodeId);
      const neighbors = adjList.get(nodeId);
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      });
    }
  }

  return visited.size === nodeIds.length;
};
