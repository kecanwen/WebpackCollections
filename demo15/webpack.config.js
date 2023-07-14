module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-demo16', 'css-demo16' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-demo16',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  }
};
