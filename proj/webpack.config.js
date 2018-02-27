const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Enable sourcemaps for debugging webpack's output. devtool: "source-map",
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: __dirname + '/index.html'
    })
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'awesome-typescript-loader'.编译目前有问题  https://github.com/s-panferov/awesome-typescript-loader/issues/541
      // {
      //     test: /\.tsx?$/,
      //     loader: "awesome-typescript-loader"
      // }, 

      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  // When importing a module whose path matches one of the following, just assume
  // a corresponding global variable exists and use that instead. This is
  // important because it allows us to avoid bundling all of our dependencies,
  // which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
