/* eslint-disable */
const path = require('path')

const joinResolver = _path => path.join(path.resolve(__dirname, _path))

module.exports = {
    webpack: {
        alias: {
            '@app': joinResolver('./src'),
            '@components': joinResolver('./src/components'),
            '@containers': joinResolver('./src/containers'),
            '@helpers': joinResolver('./src/helpers'),
            '@images': joinResolver('./src/images'),
            '@pages': joinResolver('./src/pages'),
            '@routes': joinResolver('./src/routes'),
            '@services': joinResolver('./src/services'),
            '@styles': joinResolver('./src/styles')
        }
    }
}
