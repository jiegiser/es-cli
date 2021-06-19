const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 拷贝文件或者文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/static',
          // 不需要加 dist，会直接拷贝到打包输出文件夹中
          to: 'assets'
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry"
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
