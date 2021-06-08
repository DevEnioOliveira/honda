const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
         .pipe(uglifycss({"uglycComments:" : false}))
         .pipe(concat('deps.min.css'))
         .pipe(gulp.dest('public/assets/css'))
}

module.exports = {
    depsCSS
}