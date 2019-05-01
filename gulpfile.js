const postcss = require('gulp-postcss');
const	gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
  //const gutil = require('gulp-util');
const livereload = require('gulp-livereload');
const gulpif = require('gulp-if');
const autoprefixer = require('autoprefixer');

var env,
  jsSources,
	sassSources,
	htmlSources,
	outputDir,
	sassStyle;

env = process.env.NODE_ENV || 'development';

if (env==='development') {
	outputDir = './src/';
	sassStyle = 'expanded';
} else {
	outputDir = '';
	sassStyle = 'compressed';
}

jsSources = ['./src/js/*.js'];
sassSources = ['./src/sass/styles.scss'];
htmlSources = ['*.html'];

gulp.task('sass', function() {
	gulp.src('./src/sass/styles.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('prefix', function () {
	gulp.src('./src/css/styles.css')
  	.pipe(sourcemaps.init({ loadMaps: true }))
  	.pipe(postcss([ autoprefixer({browsers: 'last 3 versions', cascade: false}) ]))
  	.pipe(sourcemaps.write('.'))
  	.pipe(gulp.dest('./dest/css'))
  	.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src(jsSources)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest/js'))
  	.pipe(livereload());
});

gulp.task('html', function() {
	gulp.src(htmlSources)
  	.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch(('./src/css/styles.css'), ['prefix']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('default', ['html', 'sass', 'js', 'prefix', 'watch']);
