const {resolve} = require('path');

module.exports = (env) => {
    return {
        context: resolve('src'),
        entry: './index.jsx',
        output: {
            path: resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        devtool: env.prod ? 'source-map' : 'eval',
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        stats: {
            color: true,
            reasons: true,
            chunks: true
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
};
