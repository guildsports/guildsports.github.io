const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
    return gulp.src('js/src/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('js/dist/'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('js/src/*.js', ['default']);
});
