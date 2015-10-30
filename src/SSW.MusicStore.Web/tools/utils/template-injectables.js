var slash = require('slash');
var path_1 = require('path');
var config_1 = require('../config');
var injectables = [];
function injectableAssetsRef() {
    return injectables;
}
exports.injectableAssetsRef = injectableAssetsRef;
function registerInjectableAssetsRef(paths, target) {
    if (target === void 0) { target = ''; }
    injectables = injectables.concat(paths
        .filter(function (path) { return !/(\.map)$/.test(path); })
        .map(function (path) { return path_1.join(target, slash(path).split('/').pop()); }));
}
exports.registerInjectableAssetsRef = registerInjectableAssetsRef;
function transformPath(plugins, env) {
    var v = '?v=' + config_1.VERSION;
    return function (filepath) {
        var filename = filepath.replace('/' + config_1.PATH.dest[env].all, '') + v;
        arguments[0] = path_1.join(config_1.APP_BASE, filename);
        return plugins.inject.transform.apply(plugins.inject.transform, arguments);
    };
}
exports.transformPath = transformPath;
//# sourceMappingURL=template-injectables.js.map