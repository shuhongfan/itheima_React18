const path = require('path')

module.exports = {
  devServer: {
    port: 3006
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}