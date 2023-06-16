var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
};
