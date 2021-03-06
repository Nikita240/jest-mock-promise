const path = require('path');

const srcDir = './lib/';
const destDir = 'dist';

module.exports = {
    entry: {
        "jest-mock-promise": srcDir+"jest-mock-promise.ts",
    },
    output: {
        path: path.resolve(__dirname + '/' + destDir),
        filename: '[name].js',
        library: 'jest-mock-promise',
        libraryTarget: 'umd'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    devtool: 'source-map',

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    }
};