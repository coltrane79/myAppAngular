var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var babelify = require('babelify');
var fs = require('fs');
//var jshing = require('gulp-jshint');


gulp.task('default', function(){
  return browserify()
  .add('./client/app.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./client/dist'));
  //return gulp.src('./client/*.js')
  //.pipe(concat('bundle.js'))
  //.pipe(gulp.dest('./client/dist'));
});

//gulp.task('lint', function(){
//  return gulp.src('./client/app.js')
//  .pipe(jshint())
//  .pipe(jshint.reporter('default'));
//});

gulp.task('watch', function(){
  gulp.watch(['./client/*.js', './client/node_modules/*'],['default']);
});
