/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const EsBuildWebpackPlugin = require('esbuild-webpack-plugin').default

const { name } = require('./package.json')

const isDev = process.env.NODE_ENV === 'development'
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  },
  {
    loader: 'postcss-loader',
    options: { javascriptEnabled: true, sourceMap: isDev },
  },
  {
    loader: 'less-loader',
    options: {
      sourceMap: isDev,
      javascriptEnabled: true,
    },
  },
]

module.exports = () => {
  const options = {
    mode: process.env.NODE_ENV || 'production',
    devtool: isDev ? 'cheap-module-eval-source-map' : false,
    devServer: {
      stats: {
        cached: true,
        chunkModules: false,
        colors: true,
        modules: false,
        children: false,
        chunks: false,
      },
      host: HOST,
      port: PORT,
      hot: true,
      compress: true,
      historyApiFallback: true,
      open: true,
      quiet: true,
      publicPath: '/',
    },

    entry: isDev
      ? [
          'react-hot-loader/patch',
          `webpack-dev-server/client?http://${HOST}:${PORT}`,
          'webpack/hot/only-dev-server',
          path.resolve(__dirname, 'src/index.tsx'),
        ]
      : {
          app: path.resolve(__dirname, 'src/index.tsx'),
        },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryDirectory: 'es',
                    libraryName: 'antd',
                    style: true,
                  }),
                ],
              }),
              compilerOptions: {
                module: 'es2015',
              },
            },
          },
        },
        {
          test: /\.(le|c)ss$/,
          use: isDev ? styleLoaders : [MiniCssExtractPlugin.loader, ...styleLoaders],
        },
        {
          test: /\.(jpe?g|png|gif|cur|ico|eot|ttf|svg|woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash:8].[ext]',
                limit: 50000,
              },
            },
          ],
        },
      ],
    },

    resolve: {
      enforceExtension: false,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.css'],
      modules: [path.resolve('src'), path.resolve('.'), path.resolve('src/shared'), 'node_modules'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
      mainFields: ['jsnext:main', 'browser', 'main'],
    },

    optimization: isDev
      ? {}
      : {
          concatenateModules: true,
          noEmitOnErrors: true,
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
              },
              commons: {
                name: 'commons',
                minChunks: 2,
                chunks: 'initial',
              },
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                minChunks: 2,
                enforce: true,
              },
            },
          },
          runtimeChunk: {
            name: 'runtime',
          },
          minimizer: [new EsBuildWebpackPlugin(), new OptimizeCssAssetsPlugin()],
        },

    plugins: [],
  }
  if (isDev) {
    options.plugins = options.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin({ title: name }),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`You application is running here http://${HOST}:${PORT}`],
          notes: ['Some additional notes to be displayed upon successful compilation'],
        },
      }),
    ])
  } else {
    options.plugins = options.plugins.concat([
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[name].[hash].css',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ])
  }
  options.plugins.push(
    new CleanWebpackPlugin(),
    new Dotenv(),
    new ProgressBarPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      title: 'react-project-template',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true,
    }),
  )

  if (process.env.ENABLE_BUNDLE_ANALYZER) {
    const smp = new SpeedMeasurePlugin()
    options.plugins.push(new BundleAnalyzerPlugin())
    return smp.wrap(options)
  }

  return options
}
