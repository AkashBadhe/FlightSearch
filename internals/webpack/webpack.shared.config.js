const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: options.babelQuery,
    }, {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader', // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(mp4|webm)$/,
      loader: 'url-loader?limit=10000',
    }],
  },
  plugins: options.plugins.concat([
    new webpack.NamedModulesPlugin(),
  ]),

  node: {
    fs: 'empty',
    path: 'empty',
    net: 'empty',
    fsevents: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },

  resolve: Object.assign({
    modules: ['app', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  }, options.resolve),

  devtool: options.devtool,

  target: 'web',
});
