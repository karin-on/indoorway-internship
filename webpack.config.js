const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (env) {
    const isDev = (env && env.dev) ? true : false;

    const config = {
        devtool: isDev ? 'eval-source-map' : false,
        entry: './src/index.js',
        output: {
            filename: 'out.js',
            path: path.resolve(__dirname, 'docs')
        },
        mode: isDev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env']
                        }
                    }
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        !isDev ?
                            MiniCssExtractPlugin.loader :
                            { loader: 'style-loader', options: { sourceMap: true } },
                        { loader: 'css-loader', options: { sourceMap: isDev } },
                        { loader: 'postcss-loader', options: { sourceMap: isDev } },
                        { loader: 'sass-loader', options: { sourceMap: isDev } }
                    ]
                }
                // {
                //     test: /\.(png|jpg|jpeg|gif)$/,
                //     use: {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[ext]',
                //             outputPath: 'images',
                //         },
                //     },
                // }
            ]
        },
        plugins: [
            // new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html'
                // favicon: './src/assets/dinks.ico'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
            // new CopyWebpackPlugin([
            //     { from: 'src/assets/images', to: 'images' }
            // ])
        ]
    };

    return config;
};