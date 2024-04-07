const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const MODULES_DIR = path.resolve(__dirname, 'node_modules');


/**
 * Webpack configuration file.
 */
module.exports = env => {

    console.warn('Build mode: %s', env.mode);

    let config = {

        mode: env.mode,
        devtool: 'source-map',
        target: 'web',

        entry: {
            'mern-frontend-app': `${APP_DIR}/index.tsx`
        },

        output: {
            path             : BUILD_DIR,
            filename         : '[name].js',
            sourceMapFilename: '[file].map',
            library          : 'constraints-fields-test',
            libraryTarget    : 'umd'
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            modules: [MODULES_DIR, APP_DIR]
        },

        module: {

            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.jsx?$/,
                    use : [{loader: 'babel-loader'}],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [{loader:  MiniCssExtractPlugin.loader}, 'css-loader', 'postcss-loader']
                }
            ]
        },

        plugins: [

            new CleanWebpackPlugin({
                verbose: true,
                dry: true,
                cleanStaleWebpackAssets: false
            }),

            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css',
            }),

            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env)
            })

        ],

        node: false,

        // Loaded on production mode
        optimization: {
            minimize: false
        },


        devServer: {

            hot: "only",
            liveReload: false,
            devMiddleware: {
                publicPath: '/dist'
            },

            static: {
                directory: __dirname,
                serveIndex: true,
                watch: true
            },

            client: {

                logging: 'info',
            },
            port: 8081
        }
    };

    return config;

};
