// include modules
var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('./assets/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function () {
  gulp.src('./assets/sass/**/*.scss')
  	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('compress', function() {
  return gulp.src('./assets/sceneOne.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});