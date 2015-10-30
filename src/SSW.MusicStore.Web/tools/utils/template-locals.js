var config_1 = require('../config');
// TODO: Add an interface to register more template locals.
function templateLocals() {
    return {
        VERSION: config_1.VERSION,
        APP_BASE: config_1.APP_BASE
    };
}
exports.templateLocals = templateLocals;
//# sourceMappingURL=template-locals.js.map