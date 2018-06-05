"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missing_value_1 = require("./missing-value");
const number_1 = require("./number");
const operator_1 = require("./operator");
function maxLength(max) {
    return missing_value_1.notMaybe((name, mixed) => {
        const length = number_1.naturalNumber()(`${name}.length`, mixed.length);
        if (length > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${mixed.length}`);
        }
        return mixed;
    });
}
exports.maxLength = maxLength;
function minLength(max) {
    return missing_value_1.notMaybe((name, mixed) => {
        const length = number_1.naturalNumber()(`${name}.length`, mixed.length);
        if (length < max) {
            throw new Error(`${name} cannot be shorter than ${max}, received ${mixed.length}`);
        }
        return mixed;
    });
}
exports.minLength = minLength;
function length(arg0, arg1) {
    if (arg1 == undefined) {
        return maxLength(arg0);
    }
    else {
        return operator_1.and(minLength(arg0), maxLength(arg1));
    }
}
exports.length = length;
//# sourceMappingURL=array-like.js.map