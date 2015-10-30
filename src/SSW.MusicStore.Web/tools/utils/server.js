var connectLivereload = require('connect-livereload');
var express = require('express');
var minilrFn = require('mini-lr');
var openResource = require('open');
var serveStatic = require('serve-static');
var path_1 = require('path');
var config_1 = require('../config');
var minilr = minilrFn();
function serveSPA() {
    var server = express();
    minilr.listen(config_1.LIVE_RELOAD_PORT);
    server.use(config_1.APP_BASE, connectLivereload({ port: config_1.LIVE_RELOAD_PORT }), serveStatic(path_1.resolve(process.cwd(), config_1.PATH.dest[config_1.ENV].all)));
    server.all(config_1.APP_BASE + '*', function (req, res) {
        return res.sendFile(path_1.resolve(process.cwd(), config_1.PATH.dest[config_1.ENV].all, 'index.html'));
    });
    server.listen(config_1.PORT, function () {
        return openResource('http://localhost:' + config_1.PORT + config_1.APP_BASE);
    });
}
exports.serveSPA = serveSPA;
function notifyLiveReload(e) {
    var fileName = e.path;
    minilr.changed({
        body: { files: [fileName] }
    });
}
exports.notifyLiveReload = notifyLiveReload;
//# sourceMappingURL=server.js.map