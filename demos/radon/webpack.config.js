const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: "build"
  },
  module: {
    rules: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:["@babel/preset-env", '@babel/preset-react']
        }
      }
    ]
  },
  mode: "development",
};