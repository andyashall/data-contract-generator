const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // // Save node_modules to a separate file

  // resolve: {
  //   alias: {
  //     xyz$: [paths.src + '/node_modules/'],
  //   }
  // },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + "/assets",
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),

    /*
     * Generates an HTML file from a template
     * Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
     */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: process.env.NODE_ENV === 'production'
        ? {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
          // More options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        }
        : false
      ,
      showErrors: process.env.NODE_ENV === 'development'
    })
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      // TypeScript: 
      { test: /\.ts$/, exclude: /node_modules/, use: ["typescript-loader"]},

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      }
      // Images: Copy image files to build folder
      // { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      // { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
};