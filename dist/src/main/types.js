"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert = require("./convert");
const assert_1 = require("./assert");
class Field {
    constructor(name, assert) {
        this.name = name;
        this.assert = assert;
        this.assertDelegate = toAssertDelegateExact(assert);
    }
    maybe() {
        return new Field(this.name, assert_1.maybe(this.assertDelegate));
    }
    optional() {
        return new Field(this.name, assert_1.optional(this.assertDelegate));
    }
    nullable() {
        return new Field(this.name, assert_1.nullable(this.assertDelegate));
    }
    withName(name) {
        return new Field(name, this.assert);
    }
    withAssert(assert) {
        return new Field(this.name, assert);
    }
}
exports.Field = Field;
function nested(ctor) {
    return (name, mixed) => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    };
}
exports.nested = nested;
function nestedExact(ctor) {
    return (name, mixed) => {
        const result = convert.toClassExact(name, mixed, ctor);
        return result;
    };
}
exports.nestedExact = nestedExact;
function isCtor(assertFunc) {
    if (assertFunc instanceof Field) {
        return false;
    }
    return assertFunc.length == 0;
}
exports.isCtor = isCtor;
function toAssertDelegate(assertFunc) {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    }
    else if (isCtor(assertFunc)) {
        return nested(assertFunc);
    }
    else {
        return assertFunc;
    }
}
exports.toAssertDelegate = toAssertDelegate;
function toAssertDelegateExact(assertFunc) {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    }
    else if (isCtor(assertFunc)) {
        return nestedExact(assertFunc);
    }
    else {
        return assertFunc;
    }
}
exports.toAssertDelegateExact = toAssertDelegateExact;
//# sourceMappingURL=types.js.map