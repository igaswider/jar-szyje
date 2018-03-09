var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var babili = require('gulp-babili');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('hello', () => {
  console.log('Hello Bartek');
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', () => {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', () => {
  return gulp.src(['app/js/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
  .on('error', function (err) {
     gutil.log(gutil.colors.red('[Error]'), err.toString());
   })
  .pipe(gulp.dest('dist/js'));
})

gulp.task('clean:dist', () => {
  return del.sync('dist');
})

gulp.task('default', function (callback) {
  runSequence(['watch', 'sass', 'browserSync'],
    callback
  ),
  gulp.src('src/app/style.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('app/css'))
})


gulp.task('build', function (callback) {
  runSequence('clean:dist', ['default', 'images', 'fonts'], 'useref', 'scripts',
    callback)
})
