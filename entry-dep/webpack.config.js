const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    a: {
      import: './src/a.js',
      dependOn: 'c',
    },
    b: {
      import: './src/b.js',
      dependOn: 'c',
    },
    c: './src/c.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
