var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildCSSDev(gulp, plugins, option) {
    return function () {
        return gulp.src(config_1.PATH.src.csslib)
            .pipe(gulp.dest(path_1.join(config_1.PATH.dest.dev.css)));
    };
};
//# sourceMappingURL=build.csslib.dev.js.map