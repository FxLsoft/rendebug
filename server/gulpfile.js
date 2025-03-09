var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps')
    pump        = require('pump')
    babel = require("gulp-babel");
    
gulp.task('js', function() {
   return gulp.src('public/javascripts/test.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/javascripts/test'));
});

gulp.task('jsmin', function(cb) {
    pump([
        gulp.src('public/javascripts/test.js'),
        sourcemaps.init(),
        babel(),
        uglify(),
        sourcemaps.write('.'),
        gulp.dest('public/javascripts/test')
    ], cb)
});

gulp.task('rendebug', function(cb) {
    pump([
        gulp.src('public/javascripts/rendebug.js'),
        babel(),
        uglify(),
        gulp.dest('server/lib')
    ], cb)
});