const path = require('path');

module.export = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
  module: {
    rules: [
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        }
      ]
    }

}