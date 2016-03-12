var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/main",
  output: {
    path: __dirname + "/wwwroot", publicPath: 'wwwroot/', filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    title: 'Custom template',
    template: 'src/index.html'
  })
]
};