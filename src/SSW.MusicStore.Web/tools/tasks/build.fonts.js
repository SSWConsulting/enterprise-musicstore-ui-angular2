var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildFonts(gulp, plugins, option) {
    return function () {
        return gulp.src(config_1.PATH.src.fonts)
            .pipe(gulp.dest(path_1.join(config_1.PATH.dest.dev.fonts)));
    };
};
//# sourceMappingURL=build.fonts.js.map