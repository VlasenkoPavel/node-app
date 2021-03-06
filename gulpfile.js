const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsGlob = require('gulp-typescript-glob');
var sourcemaps = require('gulp-sourcemaps');
const tsProject = ts.createProject("tsconfig.json");
const webpack = require('webpack');
const runSequence = require('gulp-run-sequence');

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });

// var tsProject = ts.createProject();

// gulp.task('ts', function () {

gulp.task('default', function(done) {
    runSequence('typescript', 'webpack', function() {
        done();
    });
});


gulp.task('typescript', function () {
    var tsResult = tsProject.src()
                            .pipe(tsGlob())
                            .pipe(tsProject());

    return tsResult.js
                   .pipe(sourcemaps.write("."))
                //    .pipe(cached('ts-js'))
                //    .pipe(debug({ title: "ts" }))
                   .pipe(gulp.dest("dist"));
});

gulp.task('webpack', function(callback) {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if (err) {
            throw new Error(err);
        }
        console.log(stats.toString({
            colors: true
        }));
        callback();
    });
});

// gulp.task('default', function() {
//     return gulp.src('lib/*.ts')
//         .pipe(sourcemaps.init()) // This means sourcemaps will be generated
//         .pipe(ts({
//             // ...
//         }))
//         .pipe( ... ) // You can use other plugins that also support gulp-sourcemaps
//         .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
//         .pipe(gulp.dest('dist'));
// });
