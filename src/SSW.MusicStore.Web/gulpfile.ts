/// <reference path="tools/typings/tsd/tsd.d.ts" />

let gulp = require('gulp');
let plugins = require('gulp-load-plugins');
let typescript = require('gulp-typescript');
let tslint = require("gulp-tslint");
let del = require("del");
let runSequence = require('run-sequence');

let tsProject = typescript.createProject('tsconfig.json');

gulp.task('scripts', () => {
    let tsResult = tsProject.src()
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest('./wwwroot'));
});

gulp.task('html', () => {
    return gulp.src(['app/**/*.*',
        '!app/index.html',
        '!app/**/*.ts',
        '!app/**/*.spec',
    ])
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('index', () => {
    return gulp.src(['app/index.html'])
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('lint', function () {
    gulp.src(['app/*.ts', 'app/**/**/*.ts', 'app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
});

gulp.task('node_modules', () => {
    return gulp.src([
        'node_modules/**/*.js'
    ])
        .pipe(gulp.dest('./wwwroot/node_modules/'));
});

gulp.task('app-folder-move', () => {
    gulp.src('wwwroot/app/**/*.*')
    .pipe(gulp.dest('wwwroot'));
    
       //TODO remove this task when fixed typescript compile errors when not using tsconfig settings with gulp-typescript
 
});

gulp.task('clean', () => {
    del([
        'wwwroot/app/',
        'wwwroot/components',
        'wwwroot/services',
        'wwwroot/**/*.*',
        'wwwroot/assets',
        '!wwwroot/web.config',
        '!wwwroot/app/node_modules'
    ]);
});

gulp.task('default', () => {
    runSequence('clean', 'lint', 'scripts', 'html', 'index', 'app-folder-move');
});



