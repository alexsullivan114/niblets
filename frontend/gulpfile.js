const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
    return gulp.src('./styles/**/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch', ['less'], function() {
	gulp.watch('./styles/**/*.less', ['less']);
});