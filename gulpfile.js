var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var del = require('del');
var livereload = require('gulp-livereload');
var templateCache = require('gulp-angular-templatecache');
var obfuscate = require('gulp-obfuscate');

gulp.task('move', function () {
    return gulp.src(['index.html', 'server.js', 'img/*.*', 'node_modules/**/*.*', 'lib/angular/angular.min.js', 'lib/**/*.*'], {base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('app.min.js'))
        /*.pipe(uglify())*/
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
        .pipe(notify({ message: 'Scripts task complete'}));
});

gulp.task('css-lib', function () {
    return gulp.src(['css/normalize.css', 'css/skeleton.css'], {base: './'})
        .pipe(rename('library.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify({message: 'css-library task complete'}));
});

gulp.task('css', ['css-lib'], function () {
    return gulp.src('css/app.css')
        .pipe(rename('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload())
        .pipe(notify({message: 'CSS task complete'}));
});

gulp.task('html', function () {
    return gulp.src('partials/*.html')
        .pipe(templateCache({module: 'designsByReetsie'}))
        .pipe(gulp.dest('dist/partials'))
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(livereload())
        .pipe(notify({message: 'html-partial task complete'}));
});

gulp.task('clean', function () {
    del('dist/*')
});

gulp.task('default', ['move', 'scripts', 'css', 'html']);

gulp.task('watch', function () {
    var filesToWatch = ['index.html', 'server.js', 'Procfile', 'img/*.*', 'node_modules/**/*.*', 'lib/angular/angular.min.js', 'lib/**/*.*', 'js/*.js', 'css/*.css', 'partials/*.html'];
    livereload.listen();
    gulp.watch(filesToWatch, ['default']);
});
