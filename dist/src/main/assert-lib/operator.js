"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const type_util_1 = require("@anyhowstep/type-util");
const deep_equal_1 = require("../deep-equal");
const is_literal_or_date_1 = require("../is-literal-or-date");
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
        throw new Error(`${name} is invalid.\n${messages.join(" or \n")}`);
    };
}
exports.or = or;
function chain(...arr) {
    const assertDelegates = arr.map(types_1.toAssertDelegateExact);
    return (name, mixed) => {
        for (let d of assertDelegates) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
exports.chain = chain;
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
function and(...arr) {
    const assertDelegates = arr.map(types_1.toAssertDelegateExact);
    return (name, mixed) => {
        const values = [];
        for (let d of assertDelegates) {
            values.push(d(name, mixed));
        }
        if (values.length == 0) {
            return mixed;
        }
        const first = values[0];
        if (is_literal_or_date_1.isLiteralOrDate(first)) {
            for (let i = 1; i < values.length; ++i) {
                const v = values[i];
                if (!deep_equal_1.deepEqual(first, v)) {
                    throw new Error(`${name} fails check ${i}; received ${mixed}, expected to match ${first}, found ${v}`);
                }
            }
            return first;
        }
        for (let i = 0; i < values.length; ++i) {
            const v = values[i];
            if (!(v instanceof Object) || (v instanceof Date)) {
                throw new Error(`${name} fails check ${i}; received ${mixed}, expected to be an object, found ${v}`);
            }
        }
        return type_util_1.spread(...values);
    };
}
exports.and = and;
//# sourceMappingURL=operator.js.map