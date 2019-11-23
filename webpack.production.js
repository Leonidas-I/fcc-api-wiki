const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const PurgeCssPlugin = require('purgecss-webpack-plugin');
// const glob = require('glob'); 
// const PATHS = {
//   src: path.join(__dirname, 'src')
// };


module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      /*cause problem when use sourcemap for css, can replace by postcss-loader with require css-nano to minimfy css*/
      new TerserWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    // new PurgeCssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // }),
    new WebpackBundleAnalyzer({
      generateStatsFile: true,
      openAnalyzer: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
});