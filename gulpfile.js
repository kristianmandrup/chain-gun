var gulp = require("gulp");
var babel = require("gulp-babel");
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('edge'))
});

gulp.task('build:play', function () {
  return gulp.src('play/es6/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('play/es5'))
});

gulp.task('watch:play', function () {
  livereload.listen();
  gulp.watch('play/es6/*.js', ['build:play']);
});

gulp.task('start', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('edge'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/*.js', ['start']);
});

gulp.task('watch:b', function () {
  livereload.listen();
  gulp.watch('src/*.js', ['build']);
});