const {resolve} = require('path');

module.exports = (env) => {
    return {
        context: resolve('src'),
        entry: './index.js',
        output: {
            path: resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        devtool: env.prod ? 'source-map' : 'eval'
    }
};