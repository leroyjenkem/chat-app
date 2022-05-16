const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const cssBundle = () =>
  src([
    'src/styles/main.css',
    'src/styles/nav.css',
    'src/styles/auth.css',
    'src/styles/chat.css',
  ])
    .pipe(concat('bundled.css'))
    .pipe(dest('src/styles/bundle'));

exports.cssBundle = cssBundle;
