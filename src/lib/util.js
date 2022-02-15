export const getAllResources = (nodes) => {
  return nodes.reduce((prevNode, node) => {
    if (!node.exports.resources) return prevNode;

    const resources = node.exports.resources.map((resource) => {
      if (resource.quote) return resource;
      return {
        ...resource,
        quote: node.frontmatter.title,
        date: node.frontmatter.date,
      };
    });

    return [...prevNode, ...resources];
  }, []);
};

export const sortResources = (resources, sortBy) => {
  return resources.sort((a, b) => {
    if (sortBy === "LEAST_RECENT") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
};
