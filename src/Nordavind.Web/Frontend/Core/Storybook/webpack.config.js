const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("ts-loader"),
    });

    config.module.rules.push({
        test: /\.scss$/,
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
    });

    config.module.rules.push({
        test: /\.md$/,
        loader: require.resolve("markdown-loader")
    });

    config.module.rules.push({
        test: /\normalize.css$/,
        loader: 'null-loader'
    })

    config.resolve.extensions.push(".ts", ".tsx");

    config.node = {
        fs: "empty"
    }

    return config;
};