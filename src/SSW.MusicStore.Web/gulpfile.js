/// <binding AfterBuild='default' />
/// <reference path="tools/typings/tsd/tsd.d.ts" />

var gulp = require('gulp');
var plugins = require('gulp-load-plugins');
var typescript = require('gulp-typescript');
var tslint = require("gulp-tslint");
var del = require("del");
var runSequence = require('run-sequence');

var tsProject = typescript.createProject('tsconfig.json');

var paths = {
    wwwroot: "./wwwroot",
    wwwrootApp: "./wwwroot/app" 
};

gulp.task('typescript-traspile', () => {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest(paths.wwwroot));
});

gulp.task('app-move-files', () => {
    return gulp.src(['app/**/*.*',
        '!app/**/*.ts',
        '!app/**/*.spec',
    ])
        .pipe(gulp.dest(paths.wwwrootApp));
});

gulp.task('lint-typescript', function() {
    gulp.src(['app/*.ts', 'app/**/**/*.ts', 'app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('clean', () => {
    del([paths.wwwrootApp]);
});

gulp.task('default', () => {
    runSequence('clean', 'lint-typescript', 'typescript-traspile', 'app-move-files');
});
