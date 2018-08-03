"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert = require("./convert");
const missing_value_1 = require("./assert-lib/missing-value");
class Field {
    constructor(name, assert) {
        this.name = name;
        this.assert = assert;
        this.assertDelegate = toAssertDelegateExact(assert);
    }
    maybe() {
        return new Field(this.name, missing_value_1.maybe(this.assertDelegate));
    }
    optional() {
        return new Field(this.name, missing_value_1.optional(this.assertDelegate));
    }
    nullable() {
        return new Field(this.name, missing_value_1.nullable(this.assertDelegate));
    }
    notMaybe() {
        return new Field(this.name, missing_value_1.notMaybe(this.assertDelegate));
    }
    notOptional() {
        return new Field(this.name, missing_value_1.notOptional(this.assertDelegate));
    }
    notNullable() {
        return new Field(this.name, missing_value_1.notNullable(this.assertDelegate));
    }
    withName(name) {
        return new Field(name, this.assert);
    }
    withAssert(assert) {
        return new Field(this.name, assert);
    }
    assertType(arg0, arg1) {
        if (arg1 == undefined) {
            return this.assertDelegate(this.name, arg0);
        }
        else {
            return this.assertDelegate(arg0, arg1);
        }
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
/*
export type Accepts<F extends AnyAssertFunc> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegate<infer T> ?
    (
        "__accepts" extends keyof F ?
            F["__accepts"] :
            T
    ) :
    F extends Field<string, infer T> ?
    (
        "__accepts" extends keyof F["assertDelegate"] ?
            F["assertDelegate"]["__accepts"] :
            T
    ) :
    never
);

declare const x : (() => number) & { __accepts : string }
const f = new Field("f", x);
declare const a : Accepts<typeof f>;
declare const t : TypeOf<typeof f>;*/ 
//# sourceMappingURL=types.js.map