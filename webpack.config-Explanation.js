const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

let mode = "development";
if (process.env.NODE_ENV == 'production') {
    mode = "production"
}

module.exports = {
    /* we have three options, none, development and production
       developmnet => developer friendly version with source map
       production => minified and optimized version
    */
    mode: mode,

    /* For development output in main.js 
       For developer friendly output => False
       For source map => 'source-map'
    */
    devtool: "inline-source-map",


    /* Support Live Reloading */
    devServer: {
        static: './dist',
        port: 5001, // Default 8000
        open: true, // Open in Browser
        hot: true//Watch chnages and update them quickly
    },

    /* Entry point of the webpack */
    entry: {
        // Starting point path, main is a label and it can be any value
        main: path.resolve(__dirname, 'src/app.js')
    },

    /* Output from the entry */
    output: {
        path: path.resolve(__dirname, 'dist'),
        // File name shoule be unique, using content hash will be hash version of entry point file
        filename: '[name].[contenthash].js',
        // Delete the dist files and create it again
        clean: true
    },

    /* Loaders */
    /* Webpack by defuakt undertand Json and JS file, 
       It doesn't know about HTML, CSS, SCSS, JPEG, SVG, etc 
       Here loader helps webpack to convert the files into module and import it into JS file
       Missing features of loaders handled by plugin
    */
    module: {
        rules: [
            /* Babel rules first check all Js files using regex 
               Exclude node_modules in this process
               transpile the code using babel-loader
               Babel config file is required
            */
            {
                test: /\.js$/,  //Ends with JS file
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        /* Default values used for Transpiler */
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            /* 
                Webpack starts with right side so CSS-loader will take CSS and convert into bundle
                Style Loader tale the bundle and inject into index html in dist
            */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /* Webpack 5 by default have assest loading facility. we cab load below */
            {
                test: /\.(svg|ico|png|jpeg|jpg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    },



    /* Plugins (Array of JS function)*/
    /* HTML plugin will create a HTML file, import JS, CSS and all files dynamically
    */
    plugins: [
        new HtmlWebPackPlugin({
            title: "Starting",
            filename: "index.html",
            // We can create our own template and use ablove values
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]




};