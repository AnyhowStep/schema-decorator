"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const number_1 = require("./number");
const operator_1 = require("./operator");
function maxLength(assert, max) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        const value = assertDelegate(name, mixed);
        const length = number_1.naturalNumber()(`${name}.length`, value.length);
        if (length > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${length}`);
        }
        return value;
    };
    return result;
}
exports.maxLength = maxLength;
function minLength(assert, min) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        const value = assertDelegate(name, mixed);
        const length = number_1.naturalNumber()(`${name}.length`, value.length);
        if (length < min) {
            throw new Error(`${name} cannot be shorter than ${min}, received ${length}`);
        }
        return value;
    };
    return result;
}
exports.minLength = minLength;
function length(assert, arg0, arg1) {
    if (arg1 == undefined) {
        return maxLength(assert, arg0);
    }
    else {
        return operator_1.chain(minLength(assert, arg0), maxLength(assert, arg1));
    }
}
exports.length = length;
//# sourceMappingURL=array-like.js.map