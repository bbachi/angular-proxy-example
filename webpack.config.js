const path = require('path');

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  }
};