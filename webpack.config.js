const path = require('path');


module.exports = {
    entry: {
      app: './src/js/app.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
          },
        ],
      },
  };