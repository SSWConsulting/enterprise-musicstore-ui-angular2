var path_1 = require('path');
var config_1 = require('../config');
var utils_1 = require('../utils');
module.exports = function buildJSDev(gulp, plugins) {
    return function () {
        var tsProject = utils_1.tsProjectFn(plugins);
        var src = [
            path_1.join(config_1.PATH.src.all, '**/*.ts'),
            '!' + path_1.join(config_1.PATH.src.all, '**/*_spec.ts')
        ];
        var result = gulp.src(src)
            .pipe(plugins.plumber())
            .pipe(plugins.inlineNg2Template({ base: config_1.APP_SRC }))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.typescript(tsProject));
        return result.js
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.template(utils_1.templateLocals()))
            .pipe(gulp.dest(config_1.PATH.dest.dev.all));
    };
};
//# sourceMappingURL=build.js.dev.js.map