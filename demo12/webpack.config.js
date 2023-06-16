var webpack = require('webpack');

module.exports = {
    entry: {
        bundle1: './main1.jsx',
        bundle2: './main2.jsx'
    },
    /**
     * output.filename 中的 [name] 是一个占位符，它会被替换为入口文件的名称，比如 entry: {main: './src/main.js'} 中的 main。这样的话，在编译过程中每个入口文件都会生成一个对应的输出文件，文件名为其入口文件的名称。如果你的入口文件有多个，比如：
     entry: {
        app: './src/app.js',
        index: './src/index.js',
    }
     那么 output.filename 将会被解析为 app.js 和 index.js，并分别输出到 output.path 中设置的目录下。

     另外，如果你要自定义输出文件名，也可以在 output.filename 中使用其他的占位符，比如：

     [hash]：输出文件的 MD5 哈希值；
     [chunkhash]：输出文件的 chunk 的哈希值；
     [id]：输出文件的 chunk id；
     [query]：输出文件的 query 参数的值。
     比如：

     output: {
        filename: '[name].[chunkhash:8].js'
      }
     这样的话，输出文件名将会包含对应入口文件的名称和哈希值，以避免缓存问题。其中 :8 表示只取哈希值的前 8 位。
     *
     * */
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
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
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",//公共模块的名字
            filename: "commons.js",//公共模块文件名
        })
    ]
}
