const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = "localhost"
const PORT = 1996

module.exports = {
  //入口
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],

  //打包输出
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },

  //编译模块
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: `react-hot!babel?${JSON.stringify({
          presets: ["es2015", "stage-0", "react"],
          cacheDirectory: true
        })}`,
      },
      {
        test:/\.less$/,
        loader: ExtractTextPlugin.extract(
            'css-loader?sourceMap!' +
            'less-loader?sourceMap'
        )
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.(jpg|jpeg|png|gif)$/,
        loader:'file-loader'
      }
    ]
  },

  //自动加前缀
  postcss:[
    require('autoprefixer')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  //插件
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
    ]),
  ]
}
