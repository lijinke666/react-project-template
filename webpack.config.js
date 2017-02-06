const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")            //自动生成一个html 引入打包之后的js
const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //打包完成自动打开浏览器
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')                       //自动加前缀
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;            //压缩js

const HOST = "localhost"
const PORT = 1996

module.exports = {
  //入口
  entry: [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    path.resolve(__dirname, 'src/index.js')
  ],

  //打包输出
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },

  //开发工具
  devtool: 'eval-source-map',

  //开发服务器
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: 'src',
    port: PORT
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
        // loader: ExtractTextPlugin.extract(
        //     'css-loader?sourceMap!' +
        //     'less-loader?sourceMap'
        // )
        loader:'less-loader?sourceMap'
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
    autoprefixer({
      browsers:['last 2 versions']
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  //插件
  plugins: [
    // new HtmlWebpackPlugin({
    //   title:"webpack练习",
    //   filename: __dirname + "/src/index.html"           //自动把打包的js文件引入进去
    // }),
    // new uglifyJsPlugin({                                //压缩
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.HotModuleReplacementPlugin(),           //热加载插件
    new OpenBrowserPlugin({                            //编译完成打开浏览器
      url: `http://localhost:${PORT}`
    }),
    new CopyWebpackPlugin([                            //打包的时候把html拷过去
      { from: './src/index.html', to: 'index.html' },
    ]),
  ]
}
