// var gulp = require('gulp');
// // var rename =require('gulp=rename');
// var uglify = require('gulp-uglify');

// var DEST ='bulid/';


// gulp.task('default',function(){
// 	 gulp.src('foo.js');
// 	//未压缩版本
// 	.pipe(gulp.dest(DEST))
// 	//压缩版本
// 	.pipe(uglify())
// 	.pipe(rename({}))
// })
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('jsmin', function(){
    gulp.src('./js/wave.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});