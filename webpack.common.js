module.exports = {
  entry: {
    main: './src/main.js'
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       jquery: {
  //         test: /[\\/]node_modules[\\/]jquery[\\/]/,
  //         name: 'jquery',
  //         chunks: 'all'
  //       },
  //       bootstrap: {
  //         test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
  //         name: 'bootstrap',
  //         chunks: 'all'
  //       },
  //       common: {
  //         test: /[\\/]node_modules[\\/](popper.js|@fortawesome)[\\/]/,
  //         name: 'common',
  //         chunks: 'all'
  //       },
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     },
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};