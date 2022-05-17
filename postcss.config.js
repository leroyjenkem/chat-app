module.exports = {
    plugins: [
        require('rfs'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-dark-theme-class'),
        require('postcss-custom-media')
    ],
};
