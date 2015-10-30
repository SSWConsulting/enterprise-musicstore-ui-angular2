var config_1 = require('../config');
var libs = [];
module.exports = function buildLibDev(gulp) {
    return function () {
        var src = libs.concat(config_1.PATH.src.jslib_inject, config_1.PATH.src.jslib_copy_only);
        return gulp.src(src)
            .pipe(gulp.dest(config_1.PATH.dest.dev.lib));
    };
};
//# sourceMappingURL=build.jslib.dev.js.map