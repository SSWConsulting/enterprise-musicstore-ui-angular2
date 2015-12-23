/// <reference path="tools/typings/tsd/tsd.d.ts" />

let gulp = require('gulp');
let plugins = require('gulp-load-plugins');
let typescript = require('gulp-typescript');
let tslint = require("gulp-tslint");
let del = require("del");
let runSequence = require('run-sequence');

let tsProject = typescript.createProject('tsconfig.json');

gulp.task('typescript-traspile', () => {
    let tsResult = tsProject.src()
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('app-move-files', () => {
    return gulp.src(['app/**/*.*',
        '!app/**/*.ts',
        '!app/**/*.spec',
    ])
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('lint-typescript', function() {
    gulp.src(['app/*.ts', 'app/**/**/*.ts', 'app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
});

gulp.task('clean', () => {
    del([
        'dist']);
});

gulp.task('default', () => {
    runSequence('clean', 'lint-typescript', 'typescript-traspile', 'app-move-files');
});



