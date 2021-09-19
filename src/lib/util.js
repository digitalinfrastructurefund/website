export const getAllResources = (nodes) => {
  return nodes.reduce((prevNode, node) => {
    if (!node.exports.resources) return prevNode;

    return [...prevNode, ...node.exports.resources];
  }, []);
};
