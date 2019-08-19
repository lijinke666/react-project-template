const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AutoDllPlugin = require('autodll-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { host, devPort } = require('./config')

const isDev = process.env.NODE_ENV === 'development'

module.exports = () => {
  const options = {
    mode: process.env.NODE_ENV,
    target: 'web',

    devServer: {
      contentBase: [
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'rest-mock')
      ],
      port: devPort,
      hot: true,
      inline: true,
      historyApiFallback: true,
      open: true
    },

    entry: isDev
      ? [
          'react-hot-loader/patch',
          `webpack-dev-server/client?${host}:${devPort}`,
          'webpack/hot/only-dev-server',
          path.resolve(__dirname, 'src/index.js')
        ]
      : {
          app: path.resolve(__dirname, 'src/index.js')
        },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: isDev ? `${host}:${devPort}/` : '/'
    },

    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ],
          exclude: '/node_modules/',
          include: [path.resolve('src')]
        },
        {
          test: /\.less$/,
          use: isDev
            ? [
                { loader: 'style-loader' }, //loader 倒序执行  先执行 less-loader
                {
                  loader: 'css-loader',
                  options: {
                    javascriptEnabled: true,
                    minimize: false,
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: { javascriptEnabled: true, sourceMap: true }
                }, //自动加前缀
                {
                  loader: 'less-loader',
                  options: { javascriptEnabled: true, sourceMap: true }
                }
              ]
            : ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  'css-loader',
                  { loader: 'postcss-loader', options: { sourceMap: false } },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              })
        },
        {
          test: /\.css$/,
          use: isDev
            ? [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    javascriptEnabled: true,
                    minimize: false,
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: { javascriptEnabled: true, sourceMap: true }
                }
              ]
            : ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: { sourceMap: false }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ]
              })
        },
        {
          test: /\.(jpg|jpeg|png|gif|cur|ico|eot|ttf|svg|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash:8].[ext]',
                limit: 50000
              }
            }
          ]
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
    },

    //自动补全后缀
    resolve: {
      enforceExtension: false, //2.0 后 不能写 extensions :[""]
      extensions: ['.js', '.jsx', '.json', '.less', '.css'], //比如 test.js   可以写成 require('test')
      modules: [
        path.resolve('src'), //比如 src/app/components/xx  可以写成 app/components/xx
        path.resolve('.'),
        path.resolve('src/shared'),
        'node_modules'
      ],
      alias: {
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, 'src/icons.js')
      }
    },

    //webpack4 相关升级配置
    optimization: {
      concatenateModules: true,
      noEmitOnErrors: true,
      //代码分割
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors'
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            chunks: 'initial'
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            minChunks: 2,
            enforce: true
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      },
      minimizer: isDev
        ? []
        : [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              uglifyOptions: {
                compress: {
                  warnings: false,
                  drop_debugger: true,
                  drop_console: false
                }
              }
            }),
            new OptimizeCssAssetsPlugin({
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: { removeAll: true } }, //移除所有注释
              canPrint: true //是否向控制台打印消息
            })
          ]
    },

    //插件
    plugins: []
  }
  if (isDev) {
    options.plugins = options.plugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  } else {
    options.plugins = options.plugins.concat([
      new webpack.HashedModuleIdsPlugin(),
      new ExtractTextPlugin({
        filename: 'css/[name].[chunkhash:8].css',
        allChunks: true
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '90-100'
        }
      })
    ])
  }
  options.plugins.push(
    new ProgressBarPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      title: 'react-project-template',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name].[contenthash].js',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'moment',
          'react-router',
          'react-router-dom'
        ]
      }
    })
  )

  if (process.env.ENABLE_BUNDLE_ANALYZER) {
    options.plugins.push(new BundleAnalyzerPlugin())
  }
  return options
}
