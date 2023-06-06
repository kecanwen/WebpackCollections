module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  /**
   * css-loader 会对 @import 和 url() 进行处理，就像 js 解析 import/require() 一样。
   * style-loader 把 CSS 插入到 DOM 中。
   * */
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};
