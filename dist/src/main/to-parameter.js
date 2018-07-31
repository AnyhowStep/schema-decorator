"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
//This returns a function that
//automatically calls `AssertT` on the first parameter
//to validate its type, before passing to to `FuncT`.
//This just reduces boilerplate code.
function toParameter(assert, func) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (args) => {
        args = assertDelegate("args", args);
        return func(args);
    };
}
exports.toParameter = toParameter;
//# sourceMappingURL=to-parameter.js.map