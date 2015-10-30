var path_1 = require('path');
module.exports = function watchDev(gulp, plugins) {
    return function () {
        plugins.watch(path_1.join('**/*.cs'), plugins.shell.task(['dnx-watch web']));
    };
};
//# sourceMappingURL=watch.dnx.js.map