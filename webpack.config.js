let webpack = require('webpack');
let path = require('path');
let node_externals = require('webpack-node-externals');

module.exports = {
  entry: './src/Main.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'service.js'
  },
  externals: [node_externals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: ["node_modules"],
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}