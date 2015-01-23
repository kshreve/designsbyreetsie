var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifyHTML = require('gulp-minify-html');
var del = require('del');

gulp.task('move', function() {
    var filesToMove = ['index.html', 'server.js', 'Procfile', 'img/*.*', 'node_modules/**/*.*', 'lib/angular/angular.min.js', 'lib/**/*.*'];
    return gulp.src(filesToMove, {base: './'})
               .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
             .pipe(concat('app.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('dist/js'))
             .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('css', function() {
    return gulp.src('css/*.css')
               .pipe(rename('app.min.css'))
               .pipe(minifycss())
               .pipe(gulp.dest('dist/css/'))
               .pipe(notify({message: 'CSS task complete'}));
});

gulp.task('html', function() {
    return gulp.src('partials/*.html')
               .pipe(concat('partials/partials.html'))
               .pipe(minifyHTML())
               .pipe(gulp.dest('dist/'))
               .pipe(notify({message: 'html-partial task complete'}));
});

gulp.task('clean', function(){
    del('dist/*')
});

gulp.task('default', ['move', 'scripts', 'css', 'html']);