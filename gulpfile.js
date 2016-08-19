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
  console.log("finished piping changes to bundle.js");
});


gulp.task('watch', function(){
  gulp.watch(['./client/*.js', './client/node_modules/*'],['default']);
});
