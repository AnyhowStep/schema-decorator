"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const operator_1 = require("./operator");
const basic_1 = require("./basic");
function optional(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return operator_1.or(basic_1.oneOf(undefined), assertDelegate);
}
exports.optional = optional;
function nullable(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return operator_1.or(basic_1.oneOf(null), assertDelegate);
}
exports.nullable = nullable;
function maybe(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return operator_1.or(basic_1.oneOf(undefined, null), assertDelegate);
}
exports.maybe = maybe;
function notOptional(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return ((name, mixed) => {
        if (mixed === undefined) {
            throw new Error(`${name} cannot be undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    });
}
exports.notOptional = notOptional;
function notNullable(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return ((name, mixed) => {
        if (mixed === null) {
            throw new Error(`${name} cannot be null, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    });
}
exports.notNullable = notNullable;
function notMaybe(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return ((name, mixed) => {
        if (mixed === null || mixed === undefined) {
            throw new Error(`${name} cannot be null|undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    });
}
exports.notMaybe = notMaybe;
//# sourceMappingURL=missing-value.js.map