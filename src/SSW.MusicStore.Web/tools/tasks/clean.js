var async = require('async');
var del = require('del');
var path_1 = require('path');
var config_1 = require('../config');
var config_2 = require('../config');
function cleanAll(done) {
    async.parallel([
        cleanDist,
        cleanTest,
        cleanTmp
    ], done);
}
function cleanDist(done) {
    del(config_1.PATH.dest.all, done);
}
function cleanTest(done) {
    del(config_1.PATH.dest.test, done);
}
function cleanTmp(done) {
    del(path_1.join(config_1.PATH.dest.tmp), done);
}
module.exports = function clean(gulp, plugins, option) {
    return function (done) {
        switch (option) {
            case 'all':
                cleanAll(done);
                break;
            case config_2.APP_DEST:
                cleanDist(done);
                break;
            case 'test':
                cleanTest(done);
                break;
            case 'tmp':
                cleanTmp(done);
                break;
            default: done();
        }
    };
};
//# sourceMappingURL=clean.js.map