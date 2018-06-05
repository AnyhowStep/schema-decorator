"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
//TODO delete
function assertion(assertion) {
    if (assertion.isCtor) {
        return types_1.nested(assertion.func);
    }
    else {
        return assertion.func;
    }
}
exports.assertion = assertion;
//# sourceMappingURL=assertion.js.map