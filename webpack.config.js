// JS Packages
var path = require("path");
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CompressWebpackPlugin = require('compression-webpack-plugin')
const jsLoader = {
  entry: ['babel-polyfill', "./src/js/main.js"],
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "app.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  }
}
// CSS Packages
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const cssLoader = {
  entry: ["./sass/style.scss"],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, "css"),
    filename: "styles.js",
    publicPath: "/css"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader" // compiles Sass to CSS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}

module.exports = [jsLoader, cssLoader]