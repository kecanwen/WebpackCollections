var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  /**
   * UglifyJsPlugin是webpack中的一个插件，用于压缩和混淆JavaScript代码。
   * 它可以去除代码中的注释和空格，重命名变量名和函数名来缩短代码，
   * 并使用类似eval()这样的技术来解析代码，使得代码难以被人类阅读。
   * 这样可以减小代码体积，提高代码的加载速度和运行效率。
   * 通常在webpack的production模式中使用该插件。
   *
   * */
  plugins: [
    new UglifyJsPlugin()
  ]
};
