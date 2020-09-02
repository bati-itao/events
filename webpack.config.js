const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        bundle: './script.js'
    } ,
    output: {
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
        ] 
    },
    plugins: [
        new webpack.LoaderOptionsPlugin ({
            options: {
              handlebarsLoader: {
              }
            }
        }), 
        new HtmlWebpackPlugin ({
            templateParameters:require('./events.json'),
            title: 'My awesome service',
            template: './index.handlebars'
          })
      ]
  };