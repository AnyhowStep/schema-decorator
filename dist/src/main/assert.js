"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert = require("./convert");
const validation = require("@anyhowstep/data-validation");
function nested(ctor) {
    return (name, mixed) => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    };
}
exports.nested = nested;
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
    return (name, mixed) => {
        let messages = [];
        for (let d of arr) {
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
    return (name, mixed) => {
        for (let d of arr) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
exports.and = and;
function cast(canCastDelegate, castDelegate, assertDelegate) {
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
function assert(assertDelegate) {
    return (target, propertyKey) => {
        if (target[propertyKey] !== undefined) {
            throw new Error(`Property ${propertyKey.toString()} must have a start value of undefined`);
        }
        delete target[propertyKey];
        const propertyName = (typeof propertyKey == "string") ?
            propertyKey : `Symbol(${propertyKey.toString()})`;
        const privateName = `_${propertyName}`;
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[privateName];
            },
            set: function (mixed) {
                this[privateName] = assertDelegate(propertyName, mixed);
            },
        });
    };
}
exports.assert = assert;
//Convenience
function optional(assertDelegate) {
    return or(oneOf(undefined), assertDelegate);
}
exports.optional = optional;
function nullable(assertDelegate) {
    return or(oneOf(null), assertDelegate);
}
exports.nullable = nullable;
function maybe(assertDelegate) {
    return or(oneOf(undefined, null), assertDelegate);
}
exports.maybe = maybe;
//Array
function array(assertDelegate) {
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
//# sourceMappingURL=assert.js.map