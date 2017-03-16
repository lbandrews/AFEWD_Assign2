// JavaScript Document

var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
gulp.task('minify-css', function() {
    return gulp.src('app/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});