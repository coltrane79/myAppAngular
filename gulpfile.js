var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function(){

  return gulp.src('./client/*.js')
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));

});

gulp.task('watch', function(){
  gulp.watch('js/*.js',['default']);
});
