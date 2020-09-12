const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-[hash].js",
  },
  target: "web",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        test: /\.(js|jsx)$/, // Transpila o js, jsx para arquivos para browsers antigos, es5, es4, etc
        loader: "babel-loader", // Loader para converter os arquivos

        query: {
          compact: false,
        },
      },
      // Carregar css
      {
        exclude: "/node_modules/",
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      // Carregar ext de imagens
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    /* Ler HTML */
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  /* Servidores de desenvolvimento */
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
  },
};
