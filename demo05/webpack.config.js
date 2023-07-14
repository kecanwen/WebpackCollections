module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    /**
     * options下的limit: 8192表示如果要将图片转换成DataURL格式，
     * 则图片大小不能超过8KB，否则就会被输出为图片地址。
     * 也就是说，当图片小于等于8KB时，会被转换成DataURL格式，反之则输出为图片地址。
     * 这样做可以有效减少图片的请求数量，加快页面加载速度。
     * */
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-demo16',//url-loader的作用是将图片转换成DataURL的格式
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
