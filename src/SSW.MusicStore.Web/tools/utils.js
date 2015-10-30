function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./utils/template-injectables'));
__export(require('./utils/template-locals'));
__export(require('./utils/server'));
__export(require('./utils/tasks-tools'));
function tsProjectFn(plugins) {
    return plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
    });
}
exports.tsProjectFn = tsProjectFn;
//# sourceMappingURL=utils.js.map