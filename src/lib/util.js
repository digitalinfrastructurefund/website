export const getAllResources = (nodes) => {
  return nodes.reduce((prevNode, node) => {
    if (!node.exports.resources) return prevNode;

    const resources = node.exports.resources.map((resource) => {
      if (resource.quote) return resource;
      return {
        ...resource,
        quote: node.frontmatter.title,
      };
    });

    return [...prevNode, ...resources];
  }, []);
};
