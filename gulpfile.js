let { gulp, src, dest, series, watch, task } = require('gulp');
let concat = require('gulp-concat');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let nested = require('postcss-nested');
let rfs = require('rfs');
let rename = require('gulp-rename');
let simplevars = require('postcss-simple-vars');

let SORSA = {
  css: [
    './src/styles/main.css',
    './src/styles/auth.css',
    './src/styles/nav.css',
  ],
  bundled: 'src/styles/bundle/bundled.css'
}
//gulp.task('bundling',
const bundling = () => {
  return src(SORSA.css)
    .pipe(concat('bundled.css'))
    .pipe(dest('src/styles/bundle'));
  };

//gulp.task('postcss',
const postcsscomp = () => {
  return src(SORSA.bundled)
      .pipe(postcss([rfs, nested, autoprefixer, simplevars]))
      .pipe(rename('styles.css'))
      .pipe(dest('src'));
    };

task('watchcss', function () {
watch(SORSA.css, series(bundling, postcsscomp));
});

exports.default = series(bundling, postcsscomp);
