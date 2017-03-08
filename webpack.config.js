var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: {
    app: path.resolve(__dirname + '/client/entry.js'),
  },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: 'http://localhost:3001/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: 'node_modules'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react', 'stage-0']
          },
        exclude: 'node_modules'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader'],
        }),
        exclude: 'node_modules'
      },
      { test: /\.png$/, loader: "url-loader?limit=100000", exclude: 'node_modules' },
      { test: /\.jpg$/, loader: "file-loader", exclude: 'node_modules' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader', exclude: 'node_modules' }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8083,
    publicPath: 'http://localhost:8083/'
  }
};
