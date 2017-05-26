var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var Dotenv = require('dotenv-webpack');
var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var pry = require('pryjs');
var glob = require('glob');

module.exports = {
  entry: {
    'polyfills': ['./src/polyfills.ts'],
    'app': ['./src/main.ts', './src/styles/application.scss']
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(['raw-loader', 'sass-loader'])
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),

    new Dotenv({
      systemvars: true
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new HtmlWebpackPlugin({
      template: 'src/header.ejs',
      filename: 'header.html',
      inject: false
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      },
      {
        from: 'src/examples',
        to: 'examples',
      },
      {
        context: './node_modules/crds-styles/assets/svgs/',
        from: '*.svg',
        to: 'assets/svgs'
      }
    ]),

    // Update all ./dist/examples/*.html files to reflect /app.[hash].css
    function() {
      this.plugin("done", function(stats) {

        let hash = stats.hash,
            examples = glob.sync(
              `${stats.compilation.compiler.outputPath}/examples/**/index.html`
            );

        // Loop through & edit each example...
        for (let example of examples) {
          fs.readFile(example, 'utf8', function (err, data) {
            if (err) return console.log(err);

            if (data.includes('/app.css')) {
              let newContent = data.replace(/\/app\.css/g, `/app.${hash}.css"`);
              fs.writeFile(example, newContent, 'utf8', function (err) {
                if (err) return console.log(err);
              });
            }
          });
        };
      });
    }

  ]
};