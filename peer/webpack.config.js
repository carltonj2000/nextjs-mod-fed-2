const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: { path: path.resolve(__dirname, "dist") },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 4002,
  },
  output: {
    publicPath: "http://localhost:4002/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "peer",
      library: { type: "var", name: "peer" },
      filename: "remoteEntry.js",
      exposes: {
        "./DogCaption": "./src/DogCaption",
      },
      remotes: {
        host: "hostsidecar",
        peer: "peer",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
