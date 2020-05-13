/* eslint-disable */
const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@app': path.join(path.resolve(__dirname, './src')),
            '@components': path.join(
                path.resolve(__dirname, './src/components')
            ),
            '@helpers': path.join(path.resolve(__dirname, './src/helpers')),
            '@images': path.join(path.resolve(__dirname, './src/images')),
            '@pages': path.join(path.resolve(__dirname, './src/pages')),
            '@routes': path.join(path.resolve(__dirname, './src/routes')),
            '@services': path.join(path.resolve(__dirname, './src/services')),
            '@styles': path.join(path.resolve(__dirname, './src/styles'))
        }
    }
}
