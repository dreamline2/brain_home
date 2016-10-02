var gulp = require('gulp'),               // 載入 gulp
    gulpUglify = require('gulp-uglify'),  // 載入 gulp-uglify
    gulpSass = require('gulp-sass'),    // 載入 gulp-sass
    compass = require('gulp-compass');

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

gulp.task('default', ['compass','watch']);

