const path = require("path");

const createEventPage = (data, createPage) => {
  const eventTemplate = path.resolve("./src/templates/events.js");

  const events = data.allIndexJson.eventData;
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
};

const createUpdatesPage = (data, createPage) => {
  const updatesTemplate = path.resolve("./src/templates/updates.js");

  const updates = data.updateData.updates;
  const updatePerPage = 15;
  const numPages = Math.ceil(updates.length / updatePerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/updates/" : `/updates/${i + 1}`,
      component: updatesTemplate,
      context: {
        limit: updatePerPage,
        skip: i * updatePerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

module.exports = {
  createEventPage,
  createUpdatesPage,
};
