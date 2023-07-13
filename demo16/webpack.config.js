module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
 /*   rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            /!**
             * 添加了cacheDirectory配置项，它会启用缓存机制，在重复打包未改变过的模块时防止二次编译，加快打包的速度。
             * cacheDirectory可以接收一个字符串类型的路径来作为缓存路径，这个值也可以为true，
             * 此时其缓存目录会指向node_modules/.cache/babel-loader。
             * *!/
            cacheDirectory: '../node_modules/.cache/babel-loader',
           /!* presets: [[
              'env', {
                modules: false,
              }
            ]],*!/
          },
        },
      }
    ],*/
  }
};
