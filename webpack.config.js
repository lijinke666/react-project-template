/*
 * @Author: jinke.li 
 * @Date: 2017-05-03 16:32:21 
 * @Last Modified by: jinke.li
 * @Last Modified time: 2017-06-02 11:50:06
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")            //自动生成一个html 引入打包之后的js
const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //打包完成自动打开浏览器
const CopyWebpackPlugin = require('copy-webpack-plugin')           //拷贝文件  当有第三方依赖可以copy到打包文件夹中
const autoprefixer = require('autoprefixer')                       //自动加前缀
const CptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css
const ImageminPlugin = require('imagemin-webpack-plugin').default         //压缩图片
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')       //生成打包图
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');            //webpack3 单独分离出来了这个压缩的
const AddStaticCachePlugin = require('add-static-cache-webpack-plugin')      //自己写的 写入缓存插件

const { host, dev_port } = require("./config")

module.exports = (env) => {
    //env 是npm script 运行webpack时传进来的  判断是否是开发环境
    const mode = (env && env.mode) || "DEV"

    const options = {
        //开发工具
        devtool: mode === "DEV" ? "source-map" : false,

        //开发服务器
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),   //静态资源根目录
            compress: true,       //压缩
            port: dev_port,           //端口
            hot: true,            //热更新
            inline: true,         //iframe 模式
            historyApiFallback: true,    //浏览器 history
            stats: {              //统计
                colors: true,      //输出有颜色的信息
                errors: true,     //显示错误信息
                version: true,    //显示版本号
                warnings: true,   //显示警告
                progress: true,   //显示进度,
                timings:true,     //显示时间
            }
        },

        //入口
        entry: mode === "DEV"
            ? [
                "react-hot-loader/patch",        //热更新
                `webpack-dev-server/client?${host}:${dev_port}`,
                "webpack/hot/only-dev-server",
                path.resolve(__dirname, "src/index.js")
            ]
            : {
                app: path.resolve(__dirname, "src/index.js"),
            },

        //打包输出
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: mode === "DEV"
                ? "js/[name].js"
                : "js/[name].[chunkhash:8].js",
            chunkFilename: mode === "DEV"
                ? "js/[name]Chunk.js"
                : "js/[name]Chunk.[chunkhash:8].js",
            publicPath: mode === "DEV"
                ? `${host}:${dev_port}/`
                : "/"
        },

        //模块加载器
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    use: [{
                        loader: "babel-loader"
                    }],
                    exclude: "/node_modules/",
                    include: [path.resolve("src")]        //只遍历src目录下的
                },
                {
                    test: /\.less$/,
                    use: mode === "DEV"      //开发环境 css打包到js中
                        ? [
                            { loader: "style-loader" },          //loader 倒序执行  先执行 less-laoder
                            { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                            { loader: "postcss-loader" },        //自动加前缀
                            { loader: "less-loader", options: { sourceMap: true } }
                        ]
                        : ExtractTextPlugin.extract({        //生产环境 把css单独分离出来
                            fallback: "style-loader",
                            use: [
                                "css-loader",
                                "postcss-loader",
                                {
                                    loader: "less-loader",
                                    options: {
                                        sourceMap: false,
                                    },
                                },
                            ],
                        })
                },
                {
                    test: /\.css$/,
                    use: mode === "DEV"
                        ? [
                            { loader: "style-loader" },          //loader 倒序执行  先执行 less-laoder
                            { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                            { loader: "postcss-loader" }
                        ]
                        : ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                "css-loader",
                                "postcss-loader",
                                {
                                    loader: "less-loader",
                                    options: {
                                        sourceMap: false
                                    },
                                },
                            ],
                        })
                },
                {
                    test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: "images/[name][hash:8].[ext]"          //遇到图片  生成一个images文件夹  名字.后缀的图片
                        }
                    }]
                },
                {
                    test: /\.(eot|ttf|svg|woff|woff2)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "fonts/[name][hash:8].[ext]",
                            },
                        },
                    ],
                },
            ]
        },

        //自动补全后缀
        resolve: {
            enforceExtension: false,        //2.0 后 不能写 extensions :[""]
            extensions: ['.js', '.jsx', '.json'],      //比如 test.js   可以写成 require('test')
            modules: [
                path.resolve("src"),         //比如 src/app/components/xx  可以写成 app/components/xx
                path.resolve("."),
                path.resolve("src/shared"),
                "node_modules",
            ],
        },

        //插件
        plugins: []
    }
    //根据开发环境不同  concat 不同的插件
    if (mode === "DEV") {
        options.plugins = options.plugins.concat([
            new webpack.NamedModulesPlugin(),                   //打印更具可读性模块名称在浏览器控制台
            new webpack.NoEmitOnErrorsPlugin(),                 //错误不打断
            new webpack.DefinePlugin({                          //调试
                __DEBUG__: true,
            }),
            new webpack.HotModuleReplacementPlugin(),           //热加载插件  
            new OpenBrowserPlugin({                            //编译完成打开浏览器
                url: `${host}:${dev_port}`
            })
        ])
    } else {
        options.plugins = options.plugins.concat([
            // new BundleAnalyzerPlugin(),     //生成打包图
            // //webpackv3.0新增 作用域提升 默认是闭包式打包 浏览器执行速度变慢
            // //开启这个去掉模块的包裹函数,体积更小
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.HashedModuleIdsPlugin(),     //生成稳定的hashId 没有改变的chunk文件这样hash不会变
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("production"),
                __DEBUG__: false,
            }),
            new UglifyJSPlugin({                                //压缩
                output: {
                    comments: false //移除所有注释
                },
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin({                // 将打包文件中的css分离成一个单独的css文件
                filename: 'css/app.[contenthash:8].css',
                allChunks: true
            }),
            //[1]
            //找到所有node_modules的依赖包  分离出来
            // /axios/ 没有用到的模块
            new webpack.optimize.CommonsChunkPlugin({
                name: "app",
                async: "common-in-lazy",
                children: true,
                minChunks: ({ resource } = {}) => (
                    resource &&
                    resource.includes('node_modules') &&
                    /axios/.test(resource)
                )
            }),
            // [2]
            //找到模块次数使用两次的  分离出来
            //单独打成used-twice.js 减少包的体积
            /**
             * 升级到 v2.6 貌似async不起作用  article admin detail 都使用了但是moment都打包进了对应的chunk文件
             * 导致文件增大了600kb
             * 经过github上的提问 各路大神的帮助下  解决了上面这个问题 需要设置name!!!!!!!!!!!
             */
            new webpack.optimize.CommonsChunkPlugin({
                name: "app",
                children: true,
                async: 'used-twice',
                minChunks: (module, count) => (
                    count >= 2
                ),
            }),
            //[3]
            //[1][2][3] 是按需加载 大幅减少打包js体积的关键
            //遍历node_modules目录 以.js结尾 一道vender chunk
            //自动化分离第三方依赖
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                filename: "js/common.[chunkhash:8].js",
                minChunks: ({ resource }) => (
                    resource &&
                    resource.indexOf('node_modules') >= 0 &&
                    resource.match(/\.js$/)
                )
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:['manifast']
            }),
            new webpack.LoaderOptionsPlugin({    //laoder最小化
                minimize: true
            }),
            //图片压缩
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                pngquant:{
                    quality:'90-100'
                }
            }),
            new CptimizeCssAssetsPlugin({          //压缩css  与 ExtractTextPlugin 配合使用
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } }, //移除所有注释
                canPrint: true        //是否向控制台打印消息
            }),
            //这个插件是我自己写的  用来动态生成webpack打包之后 的cache文件
            new AddStaticCachePlugin({
                template:path.resolve(__dirname,'cacheTemp.tpl'),
                cacheName:"react-project.appcache",            //缓存文件名
                comments:"如果你需要缓存一些静态资源",       //注释
                publicPath:"/"                 //公共路径
            })
        ])
    }
    options.plugins.push(
        new HtmlWebpackPlugin({
            title: "react-project-template",
            filename: "index.html",           //自动把打包的js文件引入进去
            template: path.resolve(__dirname, "src/index.html"),  //模板文件
            hash: true,        //添加hash码
            inject: true     //注射所有资源到 body元素的底部     "head" "body" true false  "body" == true
        }),
        //拷贝图片 到 打包目录下
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname,'images'),
            to:path.resolve(__dirname,'dist/images')
        }]),
    )
    return options
}
