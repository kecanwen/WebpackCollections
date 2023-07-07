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
                * 1. 支持 CSS Modules：CSS Modules 可以帮助我们在组件中使用局部作用域的 CSS，避免全局样式的污染。
                * 2. 支持自动添加浏览器前缀：CSS Loader 可以自动根据配置的浏览器兼容性规则，为生成的 CSS 代码自动添加浏览器前缀。
                * 3. 支持压缩和优化 CSS 代码：CSS Loader 可以对 CSS 代码进行压缩和优化，减小文件的体积，提升页面加载速度。
                * 4. 支持处理 CSS 中的图片和字体：CSS Loader 可以处理 CSS 中引用的图片和字体文件，将其转换为 Base64 编码，或者将其复制到构建目录中。
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
