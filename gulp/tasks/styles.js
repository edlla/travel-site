var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'), 
nested = require('postcss-nested'),
cssImports = require('postcss-import');

gulp.task('styles', function(done){
    return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssImports, cssvars, nested, autoprefixer]))
            .on('error', function(errorInfo){
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('./app/temp/styles'));
            
            done();
});