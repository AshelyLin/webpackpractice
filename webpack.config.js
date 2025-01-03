const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
      // new CleanWebpackPlugin(),
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
    mode: 'production'
}; 