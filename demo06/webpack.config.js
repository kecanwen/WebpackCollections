module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               /**
                * css-loader的作用主要是解析css文件中的@import和url语句，处理css-modules，并将结果作为一个js模块返回
                *
                * css-loader中的 modules: true 是用来启用 CSS Modules 功能的。
                * 启用 CSS Modules 后，CSS 样式的规则会被打包进一个随机生成的哈希值的 class 名，以避免样式冲突。
                * 这个 class 名字是由 CSS 内部名称和一个随机字符串组成的，保证了 class 名的独特性。
                * 一般在 React 项目中使用较多。启用 CSS Modules 后，
                * 你可以通过 import styles from './foo.module.css' 导入 CSS 文件，
                * 然后通过 className={styles.example} 来使用该 CSS 样式
                * */
               modules: true
             }
          }
        ]
      }
    ]
  }
};
