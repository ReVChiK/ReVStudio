const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test:/\.sass$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options:{outputPath: 'css/', name: '[name].min.css'}
            },'sass-loader']
        }]
    }
};