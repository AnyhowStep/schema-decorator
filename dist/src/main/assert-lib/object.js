"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const cast_1 = require("./cast");
const util_1 = require("../util");
const missing_value_1 = require("./missing-value");
types_1.Field;
function rename(fromKey, toKey, assert) {
    const d = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        if (mixed.hasOwnProperty(toKey)) {
            const toValue = mixed[toKey];
            const obj = {};
            obj[toKey] = d(`${name}.${toKey}`, toValue);
            return obj;
        }
        else {
            const fromValue = mixed[fromKey];
            const obj = {};
            obj[toKey] = d(`[${name}.${fromKey} -> ${name}.${toKey}]`, fromValue);
            return obj;
        }
    };
    result.optional = () => {
        return rename(fromKey, toKey, missing_value_1.optional(d));
    };
    return result;
}
exports.rename = rename;
/*
    Use with `and()` or `intersect()`

    const f = deriveFrom(
        "x",
        "y",
        sd.naturalNumberString(),
        parseInt,
        sd.naturalNumber()
    );

    f("obj", { x : "34" })           //Gives us { x : "34", y : 34 }
    f("obj", { x : "34", y : 100 })  //Gives us { x : "34", y : 34 }
    f("obj", { y : 34})              //Error; expected `x` to be string; received undefined
    f("obj", { })                    //Error
*/
//Use `derive()` instead
function deriveFrom(fromKey, toKey, canCast, castDelegate, assert) {
    const canCastD = types_1.toAssertDelegateExact(canCast);
    const castD = cast_1.cast(canCast, castDelegate, assert);
    const result = (name, mixed) => {
        const obj = {};
        obj[fromKey] = canCastD(`${name}.${fromKey}`, mixed[fromKey]);
        obj[toKey] = castD(`[${name}.${fromKey} > ${name}.${toKey}]`, obj[fromKey]);
        return obj;
    };
    return result;
}
exports.deriveFrom = deriveFrom;
/*
    Use with `and()` or `intersect()`

    //derive<>() can be used to rename fields
    const f = derive("x", "y", sd.stringToNaturalNumber())

    f("obj", { x : "34" })              //Gives us { y : 34 }
    f("obj", { x : "34", y : "99" })    //Gives us { y : 34 }
    f("obj", { y : "34" })              //Error; expected `x` to be string; received undefined
    f("obj", { })                       //Error

    //derive<>() can be used while keeping the old field,
    const f = intersect(
        sd.toSchema({
            x : sd.naturalNumberString()
        }),
        sd.derive("x", "y", sd.stringToNaturalNumber())
    );

    f("obj", { x : "34" })              //Gives us { x : "34", y : 34 }
    f("obj", { x : "34", y : "99" })    //Gives us { x : "34", y : 34 }
    f("obj", { y : "34" })              //Error; expected `x` to be string; received undefined
    f("obj", { })                       //Error
*/
function derive(fromKey, toKey, assert) {
    const d = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        const obj = {};
        obj[toKey] = d(`[${name}.${fromKey} >> ${name}.${toKey}]`, mixed[fromKey]);
        return obj;
    };
    return result;
}
exports.derive = derive;
function instanceOf(ctor) {
    if (!util_1.allowsInstanceOf(ctor)) {
        throw new Error(`instanceof check not allowed on ${ctor.name}`);
    }
    const result = (name, mixed) => {
        if (util_1.isInstanceOf(mixed, ctor)) {
            return mixed;
        }
        else {
            throw new Error(`Expected ${name} to be an instance of ${ctor.name}; found ${util_1.toTypeStr(mixed)}`);
        }
    };
    return result;
}
exports.instanceOf = instanceOf;
function dictionary(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        if (!(mixed instanceof Object) ||
            (mixed instanceof Date) ||
            (mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an dictionary object, received ${util_1.toTypeStr(mixed)}`);
        }
        const keys = Object.keys(mixed);
        const obj = {};
        for (let k of keys) {
            obj[k] = assertDelegate(`${name}[${k}]`, mixed[k]);
        }
        return obj;
    };
    return result;
}
exports.dictionary = dictionary;
function emptyObject() {
    const result = (name, mixed) => {
        if (!(mixed instanceof Object) ||
            (mixed instanceof Date) ||
            (mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an empty object, received ${util_1.toTypeStr(mixed)}`);
        }
        const keys = Object.keys(mixed);
        if (keys.length != 0) {
            //Didn't find an empty key; create and return an empty object
            return {};
            //throw new Error(`Expected ${name} to be an empty object, found keys ${keys.join(", ")}`);
        }
        return mixed;
    };
    return result;
}
exports.emptyObject = emptyObject;
//# sourceMappingURL=object.js.map