"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sd = require("../../assert-lib");
const util_1 = require("../../util");
const bigintDelegate = sd.or((name, raw) => {
    if (typeof raw == "bigint") {
        return raw;
    }
    throw new Error(`Expected ${name} to be of type bigint, received ${util_1.toTypeStr(raw)}`);
}, sd.chain(sd.string(), (name, str) => {
    try {
        const result = BigInt(str);
        if (result.toString() === str) {
            return result;
        }
        throw new Error(`${name} is not a valid bigint string`);
    }
    catch (err) {
        throw new Error(`${name} is not a valid bigint string; ${err.message}`);
    }
}), sd.chain(sd.finiteNumber(), (name, n) => {
    try {
        const result = BigInt(n);
        if (Number(result) === n) {
            return result;
        }
        throw new Error(`${name} is not a valid bigint number`);
    }
    catch (err) {
        throw new Error(`${name} is not a valid bigint number; ${err.message}`);
    }
}));
function bigint() {
    return bigintDelegate;
}
exports.bigint = bigint;
bigint.nullable = () => sd.nullable(bigint());
function lessThan(a, b) {
    const aStr = a.toString();
    const bStr = b.toString();
    if (aStr == bStr) {
        return false;
    }
    const aNeg = (aStr[0] == "-");
    const bNeg = (bStr[0] == "-");
    if (aNeg) {
        if (bNeg) {
            //Both negative
            if (aStr.length > bStr.length) {
                //Eg. a = -100, b = -99
                return true;
            }
            else if (aStr.length < bStr.length) {
                //Eg. a = -99, b = -100
                return false;
            }
            else {
                return aStr.localeCompare(bStr) > 0;
            }
        }
        else {
            //Eg. a = -5, b = 100
            return true;
        }
    }
    else {
        if (bNeg) {
            //Eg. a = 100, b = -5
            return false;
        }
        else {
            //Both positive
            if (aStr.length < bStr.length) {
                //Eg. a = 99, b = 100
                return true;
            }
            else if (aStr.length > bStr.length) {
                //Eg. a = 100, b = 99
                return false;
            }
            else {
                return aStr.localeCompare(bStr) < 0;
            }
        }
    }
}
function greaterThan(a, b) {
    const aStr = a.toString();
    const bStr = b.toString();
    if (aStr == bStr) {
        return false;
    }
    return lessThan(b, a);
}
const bigintSignedDelegate = sd.chain(bigintDelegate, (name, value) => {
    if (lessThan(value, BigInt("-9223372036854775808"))) {
        throw new Error(`${name} must be >= -9,223,372,036,854,775,808`);
    }
    if (greaterThan(value, BigInt("9223372036854775807"))) {
        throw new Error(`${name} must be <= 9,223,372,036,854,775,807`);
    }
    return value;
});
function bigintSigned() {
    return bigintSignedDelegate;
}
exports.bigintSigned = bigintSigned;
bigintSigned.nullable = () => sd.nullable(bigintSigned());
const bigintUnsignedDelegate = sd.chain(bigintDelegate, (name, value) => {
    if (lessThan(value, BigInt("0"))) {
        throw new Error(`${name} must be >= 0`);
    }
    if (greaterThan(value, BigInt("18446744073709551616"))) {
        throw new Error(`${name} must be <= 18,446,744,073,709,551,616`);
    }
    return value;
});
function bigintUnsigned() {
    return bigintUnsignedDelegate;
}
exports.bigintUnsigned = bigintUnsigned;
bigintUnsigned.nullable = () => sd.nullable(bigintUnsigned());
//# sourceMappingURL=bigint.js.map