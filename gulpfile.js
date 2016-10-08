var gulp = require('gulp'),               // 載入 gulp
    gulpUglify = require('gulp-uglify'),  // 載入 gulp-uglify
    gulpSass = require('gulp-sass'),    // 載入 gulp-sass
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    rename = require('gulp-concat'),
    del = require('del'),
    compass = require('gulp-compass');

// Static Server + watching scss/html files
gulp.task('server', function() {
    browserSync.init({
        server: "./build/"
    });
});

gulp.task('copy', function() {
    gulp.src(['./dev/lib/script/**/*'])
        .pipe(gulp.dest('./build/js/'))
    gulp.src(['./dev/lib/css/**/*'])
        .pipe(gulp.dest('./build/css/'))
    gulp.src('./dev/lib/image/**/*')
        .pipe(gulp.dest('./build/img/'))
    gulp.src('./dev/lib/font/**/*')
        .pipe(gulp.dest('./build/font/'))
});

 //Before build file clean the old one
gulp.task('clean', function(cb) {
    del(['./build/'], cb)
});

//Compile the layout to html
gulp.task('layout', function() {
  var jade = require('gulp-jade');
  gulp.src('./dev/layout/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./build/'))
      .pipe(browserSync.stream())
});


gulp.task('compass', function() {
  gulp.src('sass/*.scss') //來源路徑
  .pipe(compass({ //這段內輸入config.rb的內容
    css: 'css', //compass輸出位置
    sass: 'sass', //sass來源路徑
    sourcemap: true, //compass 1.0 sourcemap
    style: 'compact', //CSS壓縮格式，預設(nested)
    comments: false, //是否要註解，預設(true)
    require: ['susy'] //額外套件 susy
  }))
  .pipe(gulp.dest('css')); //輸出位置(非必要)
});

gulp.task('image', function() {
  var cache = require('gulp-cache');
  var imagemin = require('gulp-imagemin');
  return gulp.src('./dev/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./build/img/'))
    .pipe(browserSync.stream())
});

gulp.task('watch', function () {
    gulp.watch('javascript/original/**', ['script']);
    // gulp.watch('sass/*.scss', ['styles']);
    gulp.watch('sass/*.scss', ['compass']);
});

gulp.task('script', function () {
    gulp.src('javascript/original/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(gulp.dest('javascript/minify'));  // 指定最小化後的 JavaScript 檔案目錄
});
gulp.task('compile',function(){
  gulp.start('script','compass','layout')
});
gulp.task('default',['server'],function(){
 gulp.start('watch','compile');
});

