const path = require("path");

// Configure absolute imports path
// Allows src absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Make the front page match everything client side.
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
