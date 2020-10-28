const path = require("path");

module.exports = {
  plugins: [
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

    // Allow absolute imports shortuct
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
  ],
};
