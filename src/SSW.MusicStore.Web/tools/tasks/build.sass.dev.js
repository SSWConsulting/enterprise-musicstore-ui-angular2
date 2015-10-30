var path_1 = require('path');
var config_1 = require('../config');
module.exports = function buildSassDev(gulp, plugins, option) {
    return function () {
        return gulp.src(path_1.join(config_1.APP_SRC, '**', '*.scss'))
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(gulp.dest(config_1.APP_SRC));
    };
};
//# sourceMappingURL=build.sass.dev.js.map