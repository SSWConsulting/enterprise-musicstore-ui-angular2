var karma_1 = require('karma');
var path_1 = require('path');
module.exports = function karmaStart() {
    return function (done) {
        karma_1.server.start({
            configFile: path_1.join(process.cwd(), 'karma.conf.js'),
            singleRun: true
        }, done);
    };
};
//# sourceMappingURL=karma.start.js.map