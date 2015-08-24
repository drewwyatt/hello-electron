var gulp = require('gulp');
var bowerSrc = require('gulp-bower-src');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var gulpFilter = require('gulp-filter');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

var filter = gulpFilter('**/*.min.js');

gulp.task('default', ['startup']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['compile-typescript']);
  gulp.watch('src/**/*.scss', ['compile-sass']);
  gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('copy-bower', function() {
  bowerSrc()
        .pipe(filter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/assets/lib'));
});

gulp.task('compile-sass', function() {
  gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('compile-typescript', function() {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('copy-html', function() {
  gulp.src(['src/index.html'])
    .pipe(gulp.dest('build'));

  gulp.src(['src/**/*.html', '!src/index.html'])
    .pipe(flatten())
    .pipe(gulp.dest('build/assets/html'));
});

gulp.task('electron', function() {
  gulp.src(['src/electron.js'])
    .pipe(gulp.dest('build'));
});

gulp.task('startup', function() {
  runSequence(
		['copy-bower', 'compile-typescript', 'compile-sass', 'copy-html', 'electron'],
		'watch'
	);
});
