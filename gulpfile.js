/* gulp dependencies */
const gulp = require('gulp');  
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const minifycss = require('gulp-minify-css');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');


/* sass task */
gulp.task('sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 4 versions']}),
    ];  
	gulp.src('./public/stylesheets/sass/*.sass')
		.pipe(plumber())
		.pipe(sass({
			includePaths: ['sass']
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('public/stylesheets'))
});

/* postcss/cssnano task */
gulp.task('css', function() {
    var processors = [
        autoprefixer({browsers: ['last 4 versions']}),
        cssnano(),
    ];
    return gulp.src('public/stylesheets/style.css')
        .pipe(postcss(processors))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/stylesheets'));
});

/* watch sass, js and html files, doing different things with each. */
gulp.task('default', ['sass', 'css'], function() {
	/* watch sass, run the sass task on change. */
	gulp.watch(['./public/stylesheets/sass/*.sass'], ['sass']);
    gulp.watch(['./public/stylesheets/style.css'], ['css']);

});