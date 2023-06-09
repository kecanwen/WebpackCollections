var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: "bundle.js"
    },
    plugins: [
      new HtmlwebpackPlugin({
          title:'demo08_new',
          filename:'index.html'
      }),
        new OpenBrowserPlugin({
            port: 9999
        }),
        new UglifyJsPlugin()//没加这个之前2500B  加上之后516B
    ]
}
