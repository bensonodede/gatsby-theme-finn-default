const path = require("path");

// PRODUCTION PLUGINS

let prodPlugins = [
  // Enable sass files
  {
    resolve: "gatsby-plugin-sass",
    options: {
      includePaths: [`${path.join(__dirname, "src")}`],
    },
  },

  // Enable react helmet
  `gatsby-plugin-react-helmet`,

  // Allow custom font imports
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `fonts`,
      path: `${__dirname}/src/fonts/`,
    },
  },
];

// DEVELOPMENT PLUGINS

let devPlugins = [
  // Allow absolute imports shortuct in sass
  {
    resolve: "gatsby-plugin-root-import",
    options: {
      src: path.join(__dirname, "src"),
    },
  },

  // Configure es-lint for IDE
  {
    resolve: "gatsby-plugin-eslint",
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ["develop"],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
];

// Define global plugins object
let plugins;

if (process.env.NODE_ENV === "production") {
  // Assign production plugins
  plugins = prodPlugins;
} else {
  // Assign development plugins
  plugins = [...prodPlugins, ...devPlugins];
}

module.exports = {
  plugins,
};
