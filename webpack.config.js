const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputDir = path.join(__dirname, "build/");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  mode: isProd ? "production" : "development",
  output: {
    path: outputDir,
    filename: "index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false
    })
  ],
  devServer: {
    hot: true,
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css|otf$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/i, // png|jpe?g|gif|
        use: [
          {
            loader: "file-loader",
          },
        ]
      },
      {
        test: /\.svg$/,
        exclude: [/svg_processed_by_imgloader/],
        use: [
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                  }, {
                    removeDimensions: true,
                  },
                ],
                floatPrecision: 2,
              }
            }
          }
        ]
      }
    ]
  }
};
