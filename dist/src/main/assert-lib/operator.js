"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const type_util_1 = require("@anyhowstep/type-util");
function or(...arr) {
    const assertDelegates = arr.map(types_1.toAssertDelegateExact);
    return (name, mixed) => {
        let messages = [];
        for (let d of assertDelegates) {
            try {
                return d(name, mixed);
            }
            catch (err) {
                messages.push(`(${err.message})`);
            }
        }
        throw new Error(messages.join(" or "));
    };
}
exports.or = or;
function and(...arr) {
    const assertDelegates = arr.map(types_1.toAssertDelegateExact);
    return (name, mixed) => {
        for (let d of assertDelegates) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
exports.and = and;
function intersect(...assertions) {
    const assertDelegates = assertions.map(types_1.toAssertDelegateExact);
    return (name, mixed) => {
        const result = [];
        for (let d of assertDelegates) {
            result.push(d(name, mixed));
        }
        return type_util_1.spread(...result);
    };
}
exports.intersect = intersect;
//# sourceMappingURL=operator.js.map