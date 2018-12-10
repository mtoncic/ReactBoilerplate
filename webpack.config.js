var path = require('path');

module.exports = {
     entry: './main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.js'
     },
     module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };