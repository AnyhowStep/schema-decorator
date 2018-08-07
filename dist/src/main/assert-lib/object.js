"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const cast_1 = require("./cast");
const util_1 = require("../util");
types_1.Field;
/*
    Use with `and()`

    const f = rename("x", "y", sd.stringToNaturalNumber())

    f("obj", { x : "34" })              //Gives us { y : 34 }
    f("obj", { y : "34" })              //Gives us { y : 34 }
    f("obj", { x : "34", y : "99" })    //Gives us { y : 99 }
    f("obj", { })                       //Error
*/
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
    return result;
}
exports.rename = rename;
/*
    Use with `and()`

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
//# sourceMappingURL=object.js.map