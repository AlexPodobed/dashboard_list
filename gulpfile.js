var gulp = require('gulp');
var path = require('path');

var connect = require('gulp-connect');
var less = require('gulp-less');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('connect', function () {
    connect.server({
        root: ['./app'],
        livereload: true,
        port: 8888
    });
});

gulp.task('lint', function() {
    return gulp.src(['./app/js/**/*.js', '!./app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('js', function(){
    gulp.src('./app/js/**/*.js')
        .pipe(connect.reload());
});

gulp.task('less', function () {
    return gulp.src('./app/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./app/styles/'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/js/**/*.js'], ['lint','js']);
    gulp.watch(['./app/styles/app.less'], ['less']);
});

gulp.task('serve', ['less','connect', 'watch']);
