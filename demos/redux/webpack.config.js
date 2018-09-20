const path = require('path');
const spread = require('babel-plugin-transform-object-rest-spread');

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
          presets:['react', 'es2015'],
          plugins: [spread]
        }
      }
    ]
  },
  mode: "development",
};