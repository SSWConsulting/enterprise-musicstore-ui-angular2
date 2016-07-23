/// <binding BeforeBuild='tsc' />
var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var Builder = require('systemjs-builder');
var inlineNg2Template = require('gulp-inline-ng2-template');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var project = ts.createProject('tsconfig.json');

gulp.task('tsc', function() {
    return project.src()
        .pipe(ts(project))
        .pipe(gulp.dest('./app'));
});

gulp.task('stage-inline', ['tsc'], function() {
    return gulp.src('./app/**/*.js')
        .pipe(inlineNg2Template({
            base: '.',
            target: 'es5'
        }))
        .pipe(gulp.dest('./staging'));
});

gulp.task('bundle-staging', ['stage-inline'], function (cb) {
    var builder = new Builder('.', 'system.js');

    builder.config({
        defaultJSExtensions: 'js',
        map: {
            'angular2': 'node_modules/angular2',
            'rxjs': 'node_modules/rxjs'
        },
    });

    builder.buildStatic('staging/main', './staging/bundled.js')
        .then(function(output) {
            cb();
        })
        .catch(function(err) {
            console.log('Build error: ' + err);
        });
});

gulp.task('build', ['bundle-staging'], function () {
    var js = gulp.src([
        'node_modules/@angular/bundles/angular2-polyfills.js',
        'staging/bundled.js',
        'staging/raygun.js'
    ]).pipe(concat('script.js'));

    var html = gulp.src(['./index-dist.html'])
        .pipe(rename('index.html'));

    var css = gulp.src('assets/**/*.css')
        .pipe(concat('styles.css'));
    
    gulp.src(['assets/img/**/*'])
        .pipe(gulp.dest('./wwwroot/assets/img/'));
        
    return merge(js, css, html)
        .pipe(gulp.dest('./wwwroot'));
});