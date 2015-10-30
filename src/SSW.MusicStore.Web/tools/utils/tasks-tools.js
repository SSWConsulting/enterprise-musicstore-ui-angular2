var gulp = require('gulp');
var plugins = require('gulp-load-plugins');
var fs_1 = require('fs');
var path_1 = require('path');
var config_1 = require('../config');
var TASKS_PATH = path_1.join(config_1.PATH.tools, 'tasks');
function autoRegisterTasks() {
    scanDir(TASKS_PATH, function (taskname) { return registerTask(taskname); });
}
exports.autoRegisterTasks = autoRegisterTasks;
function task(taskname, option) {
    return require(path_1.join('..', 'tasks', taskname))(gulp, plugins(), option);
}
exports.task = task;
// ----------
// Private.
function registerTask(taskname, filename, option) {
    if (option === void 0) { option = ''; }
    gulp.task(taskname, task(filename || taskname, option));
}
// TODO: add recursive lookup ? or enforce pattern file + folder (ie ./tools/utils & ./tools/utils.ts )
function scanDir(root, cb) {
    if (!fs_1.existsSync(root))
        return;
    walk(root);
    function walk(path) {
        fs_1.readdirSync(path).forEach(function (file) {
            var curPath = path_1.join(path, file);
            if (fs_1.lstatSync(curPath).isDirectory()) {
                path = file;
                walk(curPath);
            }
            if (fs_1.lstatSync(curPath).isFile()) {
                var taskname = file.replace(/(\.ts)/, '');
                cb(taskname);
            }
        });
    }
}
//# sourceMappingURL=tasks-tools.js.map