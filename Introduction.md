Webpack
    1. Its a module bundler that means take all files (HTML, CSS, JS) files from different modules
    then bundle it together and optimize it for production use 
    2. It also manage the order of dependencies, code needs to first run will run first 
    3. It will bundle the files and move it to dist (distribution) folder for direct production use 

# Required Packages
    webpack => npm i -D webpack webpack-cli webpack-dev-server (Handles all core bundling core)
    babel   => npm i -D babel-loader @babel/core @babel/preset-env
    HTML    => npm i -D html-webpack-plugin
    CSS     => npm i -D style-loader css-loader
# webpack 5 

    1. Default starting point of webpack is index.js
