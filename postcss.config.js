module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('rfs'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-dark-theme-class'),
    ],
};
