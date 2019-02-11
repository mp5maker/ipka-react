const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/////////////////// DEFAULT ///////////////////////
gulp.task('default', ['css', 'librarycss', 'fonts']);

/////////////////// MAIN CSS //////////////////////
gulp.task('css', function () {
    gulp.src('react-app/sass/bootstrap.scss')
        .pipe(concat('react-main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets'))
});

/////////////////// LIBRARY CSS ///////////////////
var librarycss = [
    "node_modules/font-awesome/css/font-awesome.css",
];

gulp.task('librarycss', function () {
    gulp.src(librarycss)
        .pipe(concat('react-library.css'))
        .pipe(gulp.dest('assets'))
});

/////////////////// FONTS ///////////////////////
var fontfiles = [
    "node_modules/font-awesome/fonts/**/*",
]

gulp.task('fonts', function () {
    gulp.src(fontfiles)
        .pipe(gulp.dest('assets/fonts'))
});

/////////////////// WATCH CSS /////////////////////
gulp.task('watch', ['css'], function () {
    gulp.watch('react-app/sass/**/**/*.scss', ['css']);
})