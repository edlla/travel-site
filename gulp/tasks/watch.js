var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function(){

    browserSync.init({
      notify: false,
      server: {
        baseDir: "app"
      }

    });

    watch('./app/index.html', function(){
      browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', gulp.series(['styles'], 'cssInject'));

});

gulp.task('cssInject', function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});