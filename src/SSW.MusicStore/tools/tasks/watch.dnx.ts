import {join} from 'path';

export = function watchDev(gulp, plugins) {
    return function () {
        plugins.watch(join('**/*.cs'), plugins.shell.task(['dnx-watch web']));
    };
};
