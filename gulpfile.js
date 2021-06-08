const {series, parallel } = require('gulp')
const gulp = require('gulp')


const  { appHTML,appCSS,appIMG } = require('./src/gulpTasks/app')
const {depsCSS} = require('./src/gulpTasks/deps')

module.exports.default = series(
    parallel(
        series(
            appHTML,appCSS,appIMG
        ),
        series(
            depsCSS
        )
    )
)