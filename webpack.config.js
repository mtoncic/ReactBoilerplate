var path = require('path');

module.exports = {
     mode: "development",
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
                presets: ['@babel/preset-env', '@babel/preset-react']
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