//webpack2.2 配置练习
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")            //自动生成一个html 引入打包之后的js
const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //打包完成自动打开浏览器
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')                       //自动加前缀
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;            //压缩js

const DEV = process.env.NODE_ENV == "DEV"
const PROD = process.env.NODE_ENV == "PROD"

const HOST = "localhost"
const PORT = 1996

module.exports = {
    devtool: "source-map",
    devServer:{
        contentBase:path.resolve(__dirname,"/dist"),
        compress:true,
        port:PORT,
        hot:true,
        inline:true,
        stats:{
            color:true,
            errors:true,
            version:true,
            warnings:true,
            progress:true
        }

    },
    entry: {
        app:path.resolve(__dirname, 'src/index.js')
    },
    output:{
        filename:"app.js",
        path:path.resolve(__dirname,"dist"),
        publicPath:"/dist/"
    },
    module:{
        rules:[
            {
                test: /\.js[x]?$/,
                use: [{
                    loader: "babel-loader",
                    options: { 
                        presets: ["es2015","stage-0","react"]
                     }
                }],
            },
            {
                test:/\.html$/,
                use:[{
                    loader:"html-loader",
                    options:{
                        html:"html/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1,sourceMap:true } },
                'less-loader'
                ]
            },

            DEV ?
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]        //倒着执行 先执行css-loader
            }
            :{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
            ,{
                test:/\.(jpg|jpeg|png|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:"images/[name].[ext]"
                    }
                }]
            }
        ]
    },
    //自动补全后缀
    resolve: {
        extensions: ['.js', '.jsx']
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
        new webpack.optimize.CommonsChunkPlugin({
            name:'app',
            filename : 'app.[hash].js', //生成的文件名
            chunks : ["app"]       //引用到的入口文件
        }),
        new OpenBrowserPlugin({                            //编译完成打开浏览器
            url: `http://localhost:${PORT}`
        }),
         new ExtractTextPlugin('css/[name].[chunkhash:8].css'),

        new CopyWebpackPlugin([                            //打包的时候把html拷过去
            { from: './src/index.html', to: 'index.html' },
        ]),
  ]
}
