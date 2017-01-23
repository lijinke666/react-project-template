const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到

const HOST = "localhost"
const PORT = 8000

module.exports = {
  entry:{},

  //打包输入目录
  output:{
    path:path.resolve("dist"),
    filename:"js/[name].js",
    chunkFilename:"js/[name].js",
    pulicPath:`http://${HOST}:${PORT}/`;
  },

  //编译模块
  module: {
    rules:[
      {
        test: /\.js$/,
        use: [
          {
            loader:"babel-loader"
          }
        ],
        include: [path.resolve("src")]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:"style-loader",
          },
          {
            loader:"css-loader",
            options: {
              minimize:false,        //最小化
              sourceMap:true         //打包前与打包后对应的位置信息  方便调试
            }
          },
          {
            loader:"postcss-loader"
          },
          {
            loader:"less-loader",
            options:{
              sourceMap:true      //同上
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
            options: {
              minimize:false,
              sourceMap: true
            }
          },
          {
            loader:"postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },,
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ]
  },

  //开发工具
  devtool: "cheap-module-source-map",

  //开发服务器
  devServer: {
    contentBase: path.resolve("dist"),      //本地服务器目录  打包之后都在dist里面
    hot:true,                              //热更新
    publicPath: "/",                       //根目录
    historyApiFallback:true,
    compress:false,                         //压缩
    stats:{                                 //输出有颜色的状态信息 :)
      colors:true
    },
    host: HOST,
    port: PORT
  }

  //插件
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEBUG__: true,
    })
  ]
}
