
var gulp = require("gulp"),
    sass = require('gulp-sass'),
    concat = require("gulp-concat"),
    browserSync = require('browser-sync'),
    livereload = require('gulp-livereload'),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    usemin = require("gulp-usemin"),
    uglify = require("gulp-uglify"),
    runSequence = require('run-sequence'),
    del = require('del'),
    watch = require('gulp-watch');



gulp.task("sass",function(){
    return gulp.src('./source/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest("./source/css/"))
        .pipe(livereload())
})

gulp.task("clear",function(){
    return    del(['./public/sass'])
})

gulp.task("browser",function(){
    browserSync.init(['./source/css/**','./source/**.html'], {
        server: {
            baseDir: 'source/',
            formulario:'',
            index:''
        }
    });

})

gulp.task('gulp-copy',function(){
    return gulp.src(["source/**"])
        .pipe(gulp.dest("./public"))
})
gulp.task("usemin",function(){
    return  gulp.src("./source/**/*.html")
        .pipe(usemin({
            'css':[cssmin]
        }))
        .pipe(gulp.dest('public/'))
})

gulp.task("escuta",["browser","sass"],function(){
    gulp.watch('./source/sass/**/*.scss',["clear","sass"]);
})

gulp.task('browser-public',function(){
    browserSync.init({
        server: {
             baseDir: 'public/',
        }
    });
})

gulp.task("default",function(){
    runSequence('sass',
        ['gulp-copy', 'usemin','browser-public'],
        'clear'
    )

})
