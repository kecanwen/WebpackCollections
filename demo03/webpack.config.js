module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  /**
   *【webpack _模块】
   *     ES2015 import 语句
        CommonJS require() 语句
        AMD define 和 require 语句
        css/sass/less 文件中的 @import 语句。
        样式(url(...))或 HTML 文件(<img src=...>)中的图片链接
   * */
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
