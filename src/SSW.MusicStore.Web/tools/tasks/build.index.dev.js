var path_1 = require('path');
var config_1 = require('../config');
var utils_1 = require('../utils');
module.exports = function buildIndexDev(gulp, plugins) {
    return function () {
        var injectables = utils_1.injectableAssetsRef();
        var target = gulp.src(injectables, { read: false });
        return gulp.src(path_1.join(config_1.PATH.src.all, 'index.html'))
            .pipe(plugins.inject(target, {
            transform: utils_1.transformPath(plugins, 'dev')
        }))
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(config_1.PATH.dest.dev.all));
    };
};
//# sourceMappingURL=build.index.dev.js.map