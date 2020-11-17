const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 8080,
    publicPath: "/build",
    contentBase: "./public",
    proxy: {
      "/": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
          },
        ],
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
