var gulp = require('gulp');
var runSequence = require('run-sequence');
var config_1 = require('./tools/config');
var utils_1 = require('./tools/utils');
// --------------
// Configuration.
utils_1.autoRegisterTasks();
utils_1.registerInjectableAssetsRef(config_1.PATH.src.jslib_inject, config_1.PATH.dest.dev.lib);
utils_1.registerInjectableAssetsRef(config_1.PATH.src.csslib, config_1.PATH.dest.dev.css);
// --------------
// Clean (override).
gulp.task('clean', utils_1.task('clean', 'all'));
gulp.task('clean.dist', utils_1.task('clean', 'dist'));
gulp.task('clean.test', utils_1.task('clean', 'test'));
// --------------
// Postinstall.
gulp.task('postinstall', function (done) {
    return runSequence('clean', 'tsd', 'npm', done);
});
// --------------
// Build dev.
gulp.task('build.dev', function (done) {
    return runSequence('clean.dist', 'tslint', 'build.jslib.dev', 'build.sass.dev', 'build.js.dev', 'build.csslib.dev', 'build.fonts', 'build.images', 'build.index.dev', done);
});
gulp.task('build.dev.watch', function (done) {
    return runSequence('build.dev', 'watch.dev', done);
});
gulp.task('build.test.watch', function (done) {
    return runSequence('build.test', 'watch.test', done);
});
// --------------
// Test.
gulp.task('test', function (done) {
    return runSequence('clean.test', 'tslint', 'build.test', 'karma.start', done);
});
// --------------
// Serve.
gulp.task('serve', function (done) {
    return runSequence("build." + config_1.ENV, 'watch.dnx', 'server.start', 'watch.serve', done);
});
// --------------
// Build prod.
// To be implemented (https://github.com/mgechev/angular2-seed/issues/58)
// Will start implementation when Angular 2 will get close to a stable release.
//# sourceMappingURL=gulpfile.js.map