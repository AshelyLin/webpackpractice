const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './src/js/index.js',
      './src/js/about.js'
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    module: {
      rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Demo',
        template: './index.html'
      }),
    ],
    optimization: {
      splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 50000,
            cacheGroups: {
              default: false, // 禁用預設分割規則
              common: {
                test: /[\\/]src[\\/]/,
                name: 'common', // 固定檔案名稱
                minChunks: 2,
                chunks: 'all',
              },
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors', // 固定檔案名稱
                chunks: 'all',
              },
            },
          },
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'), // 伺服靜態檔案的路徑
      },
      devMiddleware: {
        publicPath: '/navigate/',  // 虛擬文件訪問路徑前綴 https://127.0.0.1/navigate/XXX
      },
      port: 8080, // 設定開發伺服器的端口
      open: true, // 啟動時自動打開瀏覽器
      hot: true, // 啟用熱模組替換
    },
    mode: 'production'
}; 