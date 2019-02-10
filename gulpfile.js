const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/////////////////// DEFAULT ///////////////////////
gulp.task('default', ['css', 'librarycss', 'libraryjs', 'fonts', 'favicon', 'deploy']);

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

/////////////////// LIBRARY JS ///////////////////
var libraryjs = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/splitting/dist/splitting.min.js',
    "node_modules/lodash/lodash.min.js",
    "node_modules/axios/dist/axios.min.js",
    "node_modules/react/umd/react.production.min.js",
    "node_modules/react-dom/umd/react-dom.production.min.js",
    "node_modules/react-router/umd/react-router.min.js",
    "node_modules/react-router-dom/umd/react-router-dom.min.js",
    "node_modules/prop-types/prop-types.min.js",
    "node_modules/redux/dist/redux.min.js",
    "node_modules/react-redux/dist/react-redux.min.js",
    "node_modules/redux-thunk/dist/redux-thunk.min.js"
];

gulp.task('libraryjs', function () {
    gulp.src(libraryjs)
        .pipe(concat('react-library.js'))
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

/////////////////// FAVICON ///////////////////////
gulp.task('favicon', function () {
    gulp.src('react-app/favicon.ico')
        .pipe(gulp.dest('assets'))
});

/////////////////// WATCH CSS /////////////////////
gulp.task('watch', ['css'], function () {
    gulp.watch('react-app/sass/**/**/*.scss', ['css']);
})

/////////////////// DEPLOY /////////////////////
gulp.task('deploy', function() {
    gulp.src('react-app/deploy/index.html')
        .pipe(gulp.dest('assets'))
})