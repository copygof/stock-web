'use strict';
const webpack = require('webpack');
const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    context: path.resolve(CURRENT_WORKING_DIR, 'client'),
    entry: {
        app: [
            'webpack-hot-middleware/client', // bundle the client for hot reloading
            'react-hot-loader/patch',   // activate HMR for React
            './main.js'  // the entry point of app
        ]
    },
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'), //  destination
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        new webpack.NoEmitOnErrorsPlugin(),  // do not emit compiled assets that include errors
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //check for all js files
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=env,presets[]=stage-0,presets[]=react',
                }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: "source-map"
};

module.exports = config;