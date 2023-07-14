var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'k_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-demo16', 'css-demo16' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-demo16',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  plugins: [
    //插件
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: './index.html'
    }),
  ]
};
