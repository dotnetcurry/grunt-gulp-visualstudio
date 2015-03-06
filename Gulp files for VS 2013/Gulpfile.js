var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var karma = require('gulp-karma');

gulp.task('bower', function () {
    return bower('./bower_components');
});

gulp.task('copyLibs', ['bower'], function () {
    gulp.src(['bower_components/angular/*.*'])
        .pipe(gulp.dest('public/libs/angular'));

    gulp.src(['bower_components/bootstrap/dist/css/*.*'])
        .pipe(gulp.dest('public/libs/bootstrap'));

    gulp.src(['bower_components/jquery/dist/*.*'])
        .pipe(gulp.dest('public/libs/jquery'));
});

gulp.task('karma', function () {
    return gulp.src(['tests/*.js']).pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }));
});

gulp.task('copyCss', function () {
    return gulp.src(['styles/*.css'])
        .pipe(gulp.dest('public/dist'));
});

gulp.task('concat', function () {
    return gulp.src(['app/moviesApp.js', 'app/moviesCRUDSvc.js', 'app/MoviesCtrl.js'])
    .pipe(concat('public/dist/moviesCombined.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['bower', 'copyLibs', 'copyCss', 'concat']);