const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production', 
  entry: "./index.js",
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      minSize: 0,//指定拆分的最小文件大小。设置为0表示无论大小如何，都会进行拆分。
      chunks: "all",//指定要拆分的代码块类型。这里设置为'all'表示拆分所有的代码块，包括入口代码块和异步加载的代码块
      cacheGroups: {//用于定义拆分的缓存组，每个缓存组可以根据一定的规则将模块拆分到不同的代码块中
        a: {//a缓存组：它的test属性是一个正则表达式，用于匹配需要拆分的模块的路径。这里的正则表达式/a\.css/表示匹配路径中包含'a.css'的模块。如果有匹配的模块，它将被拆分到名为'a'的代码块中。
          test: /a.css/,
          name: "a",
        },
        b: {// b缓存组：与a缓存组类似，它的test属性匹配路径中包含'b.css'的模块，并将其拆分到名为'b'的代码块中。
          test: /b.css/,
          name: "b",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
};
