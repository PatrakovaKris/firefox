var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var jpg = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('minifyjs', function(){
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function(){
  return gulp.src('src/*.css')
      .pipe(sass())
      .pipe(gulp.dest('dist'));
});

gulp.task('jade', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('jpg', function(){
    return gulp.src('src/*.jpg')
        .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
   return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


gulp.task('default',['minifyjs', 'sass','jade','jpg','webserver']);