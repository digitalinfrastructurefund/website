const path = require("path");

const createPaginatedPages = ({ data, createPage, pageTemplate, pagePath }) => {
  const dataPerPage = 15;
  const numPages = Math.ceil(data.length / dataPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? pagePath : `${pagePath}/${i + 1}`,
      component: pageTemplate,
      context: {
        limit: dataPerPage,
        skip: i * dataPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

const createEventPage = (data, createPage) => {
  const pageTemplate = path.resolve("./src/templates/events.js");

  createPaginatedPages({
    data,
    pageTemplate,
    createPage,
    pagePath: "/events",
  });
};

const createUpdatesPage = (data, createPage) => {
  const pageTemplate = path.resolve("./src/templates/updates.js");

  createPaginatedPages({
    data: data,
    pageTemplate,
    createPage,
    pagePath: "/updates",
  });
};

const createProjectsPage = (data, createPage) => {
  const pageTemplate = path.resolve("./src/templates/projects.js");

  createPaginatedPages({
    data,
    pageTemplate,
    createPage,
    pagePath: "/projects",
  });
};

module.exports = {
  createEventPage,
  createUpdatesPage,
  createProjectsPage,
};
