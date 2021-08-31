const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  performance: {
    hints: "warning", // 枚举 false关闭
    maxEntrypointSize: 100000000, // 最大入口文件大小
    maxAssetSize: 100000000, // 最大资源文件大小
    assetFilter: function (assetFilename) {
      //只给出js文件的性能提示
      return assetFilename.endsWith(".js");
    },
  },
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "写代码了",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.styl$/i,
        loader: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.less$/i,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
