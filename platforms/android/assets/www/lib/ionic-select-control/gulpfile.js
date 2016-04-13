var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['minify-javascript', 'minify-css']);

gulp.task('minify-javascript', function (done) {
    gulp.src('./src/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify(),
          {
            mangle: false,
            output: { beautify: true }
          })
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'))
        .on('end', done);
});

gulp.task('minify-css', function (done) {
    gulp.src('./src/*.css')
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./dist/'))
        .on('end', done);
});