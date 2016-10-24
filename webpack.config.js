var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
    entry: {
        'polyfills': './dev/polyfills.ts',
        'vendor': './dev/vendor.ts',
        'app': './dev/main.ts'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, 
        // {
        //     test: /\.html$/,
        //     loader: 'html'
        // }
        {test: /\.html$/, loader: 'raw'}
        , {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.css$/,
            exclude: path.join(__dirname, 'dev/app'),//helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.css$/,
            include:  path.join(__dirname, 'dev/app'),//helpers.root('src', 'app'),
            loader: 'raw'
        }]
    },

    sassLoader: {
        includePath: ['dev/scss']
    },

    plugins: [
        new ExtractTextPlugin("[name].css", { allChunks: true }),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "moment": "moment"
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: './dev/public/index.html',
          chunksSortMode: 'dependency'
        }),
        new CopyWebpackPlugin([{
            context: 'dev/public/images',
            from: '**/*',
            to: 'images'
        }]),
        // new webpack.optimize.CommonsChunkPlugin({
        //   //name: ['app', 'vendor', 'polyfills']
        //   name: "vendor"
        // })
        new webpack.optimize.CommonsChunkPlugin({
          name: ['vendor', 'polyfills']
        })

    ],
    //  devtool: 'source-map',
    resolve: {
        root: path.resolve(__dirname, 'dev'),
        alias: {
            // ymaps: 'vendor/angular-ymaps.js',
        },
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts', 'html']
    },
    devServer: {
        contentBase: './build',
        port: "8080",
        colors: true,
        historyApiFallback: true,
        inline: true // reloads page after any changes
    }
};

//------PRODUCTION CONFIG--------//
if (NODE_ENV == 'prod') {
    module.exports.plugins.push(
        // The problem was being caused by the Uglify mangler. Without knowing which variable rename was causing the problem, the solution was to turn off mangling entirely:
        //http://stackoverflow.com/questions/30322921/webpack-optimize-with-uglifyjs-plugin-causes-runtime-error
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname),
            verbose: true
        })
    )
}
