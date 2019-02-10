const path = require('path')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const compressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry: "./react-app/app/main.js",
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "react-main.js",
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: 'style:loader!css-loader!sass-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: false,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new compressionPlugin()
    ]
};