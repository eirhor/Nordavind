const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
    server: path.resolve(__dirname, './server.ts')
}

const output = {
    filename: '[name].js',
    path: path.resolve(__dirname, '../wwwroot/public')
}

module.exports = {
    entry: entry,
    output: output,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', scss],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tslint.json')
                }
            },
            {
                test: /\.s?css$/,
                loader: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './Core/postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(output.path + '/**/*.*', {
            root: __dirname,
            verbose: true,
            dry: false,
            watch: false
        })
    ]
}