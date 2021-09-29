const path = require("path");

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const eventTemplate = path.resolve("./src/templates/events.js");
  return graphql(
    `
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
      }
    `
  ).then((result) => {
    if (result.errors) {
      console.error(result.errors);
      // throw result.errors;
    }

    console.log(result.data.allIndexJson.eventData.length);

    const events = result.data.allIndexJson.eventData;
    const eventPerPage = 15;
    const numPages = Math.ceil(events.length / eventPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? "/events/" : `/events/${i + 1}`,
        component: eventTemplate,
        context: {
          limit: eventPerPage,
          skip: i * eventPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};
