var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');


gulp.task('default', function(){
  return gulp.src('./client/*.js')
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./client/dist'));
});

gulp.task('watch', function(){
  gulp.watch('./client/*.js',['default']);
});
