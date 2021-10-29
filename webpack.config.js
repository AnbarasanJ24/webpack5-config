const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

let mode = "development";
if (process.env.NODE_ENV == 'production') {
    mode = "production"
}

module.exports = {

    mode: mode,

    devtool: "inline-source-map",
    devServer: {
        static: './dist',
        port: 5001,
        open: true,
        hot: true
    },

    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|ico|png|jpeg|jpg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            title: "Starting",
            filename: "index.html",
            // We can create our own template and use ablove values
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
};