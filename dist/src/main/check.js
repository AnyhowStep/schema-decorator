"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
function check(f, name, mixed) {
    const d = types_1.toAssertDelegateExact(f);
    return d(name, mixed);
}
exports.check = check;
//# sourceMappingURL=check.js.map