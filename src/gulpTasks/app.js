const gulp = require('gulp');
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const babel = require('gulp-babel')

function appHTML() {
    return gulp.src('public/index.html')
            .pipe(htmlMin({collapseWhitespace: true}))
            .pipe(gulp.dest('public'))
}

function appCSS() {
    return gulp.src('src/**/*.css')
            .pipe(uglifyCss({"uglycComments:" : true}))
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('public/assets/css'))
}

/**
 * 
 * appJS a fins didaticos para simular scripts javascript puro
 * 
 */



function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('public/assets/imgs'))
}

module.exports = {
    appHTML,
    appCSS,
    appIMG
}