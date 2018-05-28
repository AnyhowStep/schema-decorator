"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation = require("@anyhowstep/data-validation");
const types_1 = require("./types");
const myUtil = require("./util");
const type_util_1 = require("@anyhowstep/type-util");
types_1.Field; //For implicit type inference
//TODO delete
function assertion(assertion) {
    if (assertion.isCtor) {
        return types_1.nested(assertion.func);
    }
    else {
        return assertion.func;
    }
}
exports.assertion = assertion;
function toTypeStr(arr) {
    const mapped = arr.map((i) => {
        if (i === null) {
            return "null";
        }
        else if (i === undefined) {
            return "undefined";
        }
        else {
            return i;
        }
    });
    return mapped.join("|");
}
function oneOf(...arr) {
    return (name, mixed) => {
        for (let item of arr) {
            if (mixed === item) {
                return mixed;
            }
        }
        throw new Error(`Expected ${name} to be one of ${toTypeStr(arr)}; received ${typeof mixed}(${mixed})`);
    };
}
exports.oneOf = oneOf;
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
function cast(canCast, castDelegate, assert) {
    const canCastDelegate = types_1.toAssertDelegateExact(canCast);
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        try {
            //If this works, we are already the desired data type
            return assertDelegate(name, mixed);
        }
        catch (err) {
            //Failed. We need to cast.
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //One final check
            return assertDelegate(name, to);
        }
    };
}
exports.cast = cast;
function castFirst(canCast, castDelegate, assert) {
    const canCastDelegate = types_1.toAssertDelegateExact(canCast);
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        try {
            //Attempt to cast first
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //Check that the result is the desired type
            return assertDelegate(name, to);
        }
        catch (err) {
            //We failed to cast, check if the original value is the desired type
            return assertDelegate(name, mixed);
        }
    };
}
exports.castFirst = castFirst;
function assert(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (target, propertyKey) => {
        const propertyName = (typeof propertyKey == "string") ?
            propertyKey : `Symbol(${propertyKey.toString()})`;
        const privateName = `____hijacked-by-schema-decorator-${propertyName}`;
        const superAccessorGenerator = myUtil.getAccessor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[privateName];
            },
            set: function (mixed) {
                //If we are here, we have the accessor defined on the class prototype,
                //but not on the instance itself.
                //We want to preserve the behaviour of Object.keys(),
                //So, we need to define the accessor on the instance.
                let superSetter = undefined;
                if (superAccessorGenerator != undefined && superAccessorGenerator.set != undefined) {
                    superAccessorGenerator.set.bind(this)(mixed);
                    const accessor = Object.getOwnPropertyDescriptor(this, propertyKey);
                    if (!myUtil.isAccessorDescriptor(accessor) || accessor.set == undefined) {
                        throw new Error(`Expected ${propertyKey.toString()} to be an accessor and have a "set()" method`);
                    }
                    superSetter = accessor.set.bind(this);
                }
                //Set the value on the instance first,
                //We define a property that is not enumerable,
                //So it does not show up in Object.keys().
                //We don't want this property to show up because
                //its name is `privateName`, not the "original" name.
                if (superSetter == undefined) {
                    Object.defineProperty(this, privateName, {
                        value: assertDelegate(propertyName, mixed),
                        writable: true,
                        enumerable: false,
                    });
                }
                else {
                    superSetter(assertDelegate(propertyName, mixed));
                }
                //We define the accessor that should be used from now on
                //And will be enumerable with Object.keys(instance)
                Object.defineProperty(this, propertyName, {
                    get: function () {
                        return this[privateName];
                    },
                    set: function (mixed) {
                        if (superSetter == undefined) {
                            this[privateName] = assertDelegate(propertyName, mixed);
                        }
                        else {
                            superSetter(assertDelegate(propertyName, mixed));
                        }
                    },
                    enumerable: true,
                    configurable: true,
                });
            },
            enumerable: true,
        });
    };
}
exports.assert = assert;
//Convenience
function optional(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return or(oneOf(undefined), assertDelegate);
}
exports.optional = optional;
function nullable(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return or(oneOf(null), assertDelegate);
}
exports.nullable = nullable;
function maybe(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return or(oneOf(undefined, null), assertDelegate);
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
//Array
function array(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        if (!(mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an array, received ${typeof mixed}`);
        }
        let isCopy = false;
        for (let i = 0; i < mixed.length; ++i) {
            const cur = assertDelegate(`${name}[${i}]`, mixed[i]);
            if (cur !== mixed[i] && !isCopy) {
                mixed = mixed.slice();
                isCopy = true;
            }
            mixed[i] = cur;
        }
        return mixed;
    };
}
exports.array = array;
function date() {
    return (name, mixed) => {
        if (typeof mixed == "string") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        }
        else if (typeof mixed == "number") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        }
        else if (mixed instanceof Date) {
            return mixed;
        }
        else {
            throw new Error(`Expected ${name} to be a Date, Date string, or Date number`);
        }
    };
}
exports.date = date;
function any() {
    return (_name, mixed) => {
        return mixed;
    };
}
exports.any = any;
//Please only pass enums here
var Enum;
(function (Enum) {
})(Enum = exports.Enum || (exports.Enum = {}));
function enumeration(e) {
    const keys = Object.keys(e).filter((k) => {
        return !/^\d/.test(k);
    });
    const values = keys.map((k) => {
        return e[k];
    }).filter((v) => {
        return (typeof v == "string" ||
            typeof v == "number");
    });
    return oneOf(...values);
}
exports.enumeration = enumeration;
//Convenience
function boolean() {
    return validation.Boolean.assertBoolean;
}
exports.boolean = boolean;
function number() {
    return validation.Number.assertFiniteNumber;
}
exports.number = number;
function integer() {
    return validation.Number.assertInteger;
}
exports.integer = integer;
function naturalNumber() {
    return validation.Number.assertNaturalNumber;
}
exports.naturalNumber = naturalNumber;
function string() {
    return validation.String.assertString;
}
exports.string = string;
function numberToBoolean() {
    return cast(validation.Number.assertFiniteNumber, (raw) => {
        return (raw != 0);
    }, validation.Boolean.assertBoolean);
}
exports.numberToBoolean = numberToBoolean;
function stringToBoolean() {
    return cast(validation.String.assertString, (raw) => {
        if (raw == "1" || raw.toLowerCase() == "true") {
            return true;
        }
        else {
            return false;
        }
    }, validation.Boolean.assertBoolean);
}
exports.stringToBoolean = stringToBoolean;
function stringToNumber() {
    return cast(validation.NumberString.assertFiniteNumberString, parseFloat, validation.Number.assertFiniteNumber);
}
exports.stringToNumber = stringToNumber;
function stringToInteger() {
    return cast(validation.NumberString.assertIntegerString, parseInt, validation.Number.assertInteger);
}
exports.stringToInteger = stringToInteger;
function stringToNaturalNumber() {
    return cast(validation.NumberString.assertNaturalNumberString, parseInt, validation.Number.assertNaturalNumber);
}
exports.stringToNaturalNumber = stringToNaturalNumber;
function nil() {
    //Using this because data-validation is bugged
    return (name, mixed) => {
        if (mixed === null) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
exports.nil = nil;
function undef() {
    //Using this because data-validation is bugged
    return (name, mixed) => {
        if (mixed === undefined) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}
exports.undef = undef;
function varChar(arg0, arg1) {
    if (arg1 == undefined) {
        return validation.String.assertMaxLengthHandler(arg0);
    }
    else {
        return validation.String.assertLengthHandler({
            min: arg0,
            max: arg1,
        });
    }
}
exports.varChar = varChar;
function numberToTrue() {
    return (name, mixed) => {
        const b = numberToBoolean()(name, mixed);
        return oneOf(true)(name, b);
    };
}
exports.numberToTrue = numberToTrue;
function numberToFalse() {
    return (name, mixed) => {
        const b = numberToBoolean()(name, mixed);
        return oneOf(false)(name, b);
    };
}
exports.numberToFalse = numberToFalse;
function jsonObjectStr() {
    return (name, str) => {
        validation.String.assertString(name, str);
        let jsonObject = undefined;
        try {
            jsonObject = JSON.parse(str);
        }
        catch (err) {
            throw new Error(`Expected ${name} to be a valid JSON string; ${err.message}`);
        }
        const jsonStr = JSON.stringify(jsonObject);
        if (jsonStr[0] != "{") {
            throw new Error(`Expected ${name} to be a JSON object, received ${jsonStr}`);
        }
        //We return the result of JSON.stringify() to use the minimal amount of space
        return jsonStr;
    };
}
exports.jsonObjectStr = jsonObjectStr;
function jsonObject() {
    return (name, mixed) => {
        if (typeof mixed == "string") {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, mixed);
            return JSON.parse(mixed);
        }
        else {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, JSON.stringify(mixed));
            return mixed;
        }
    };
}
exports.jsonObject = jsonObject;
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
//# sourceMappingURL=assert.js.map