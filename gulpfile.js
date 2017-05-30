var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

browserSync.init({
    server: "./"
});
gulp.task('build', function () {
    return browserify({entries: 'src/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/**')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'))
    
});


gulp.task('watch', ['build'], function () {
	gulp.watch(['src/**/*.js','src/**/*.jsx'], ['build']);
    gulp.watch('src/sass/**', ['sass']);
    gulp.watch(['dist/**/**']).on('change', browserSync.reload);
    gulp.watch(['style/**/**']).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);