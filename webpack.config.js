let mode = "development";
if (process.env.NODE_ENV == 'production') {
    mode = "production"
}

module.exports = {
    mode: mode,

    /* For development output in main.js 
       For developer friendly output => False
       For source map => 'source-map'
    */
    devtool: "source-map",

    /* All rules comes under module */
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
                    loader: "babel-loader"
                }
            }
        ]
    },

    /* Support Live Reloading */
    devServer: {
        static: "./dist"
    }
};