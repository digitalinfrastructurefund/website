const {
  createEventPage,
  createUpdatesPage,
  createProjectsPage,
} = require("./src/lib/createPageHelper");

const allQueries = `
query {
  allIndexJson(sort: { fields: date, order: DESC }) {
    eventData: edges {
      event: node {
        id
        description
        date
        title
        coverImage {
          publicURL
        }
      }
    }
  }
  updateData: allMdx(
    filter: { frontmatter: { type: { eq: "update" } } }
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    updates: nodes {
      frontmatter {
        title
        author
        date
        path
        type
        coverImage {
          publicURL
        }
      }
      slug
      id
      excerpt(pruneLength: 72, truncate: true)
    }
    pageInfo {
      currentPage
      totalCount
      perPage
      pageCount
      itemCount
      hasPreviousPage
      hasNextPage
    }
  }
  projectData: allMdx(
    filter: { frontmatter: { type: { eq: "project" } } }
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    projects: nodes {
      frontmatter {
        title
        author
        date
        description
        path
        type
        coverImage {
          publicURL
        }
      }
      id
      slug
      excerpt(pruneLength: 72, truncate: true)
    }
    pageInfo {
      currentPage
      totalCount
      perPage
      pageCount
      itemCount
      hasPreviousPage
      hasNextPage
    }
  }
}
`;

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data, errors } = await graphql(allQueries);
  if (errors) throw errors;

  return [
    createEventPage(data.allIndexJson.eventData, createPage),
    createUpdatesPage(data.updateData.updates, createPage),
    createProjectsPage(data.projectData.projects, createPage),
  ];
};
