"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operator_1 = require("./operator");
const basic_1 = require("./basic");
const number_1 = require("./number");
const cast_1 = require("./cast");
const array_like_1 = require("./array-like");
function finiteNumberString() {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const toCheck = parseFloat(str);
        number_1.finiteNumber()(`${name}'s number value`, toCheck);
        return str;
    });
}
exports.finiteNumberString = finiteNumberString;
function integerString() {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const toCheck = parseFloat(str);
        number_1.integer()(`${name}'s number value`, toCheck);
        return str;
    });
}
exports.integerString = integerString;
function naturalNumberString() {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const toCheck = parseFloat(str);
        number_1.naturalNumber()(`${name}'s number value`, toCheck);
        return str;
    });
}
exports.naturalNumberString = naturalNumberString;
function stringToNumber() {
    return cast_1.cast(finiteNumberString(), parseFloat, number_1.finiteNumber());
}
exports.stringToNumber = stringToNumber;
function stringToInteger() {
    return cast_1.cast(integerString(), parseInt, number_1.integer());
}
exports.stringToInteger = stringToInteger;
function stringToNaturalNumber() {
    return cast_1.cast(naturalNumberString(), parseInt, number_1.naturalNumber());
}
exports.stringToNaturalNumber = stringToNaturalNumber;
function stringLength(arg0, arg1) {
    return operator_1.and(basic_1.string(), array_like_1.length(arg0, arg1));
}
exports.stringLength = stringLength;
function varChar(arg0, arg1) {
    return stringLength(arg0, arg1);
}
exports.varChar = varChar;
function char(length) {
    return stringLength(length, length);
}
exports.char = char;
function match(regex, errorMessageDelegate) {
    return operator_1.chain(basic_1.string(), (name, mixed) => {
        if (regex.test(mixed)) {
            return mixed;
        }
        else {
            if (errorMessageDelegate == undefined) {
                throw new Error(`${name} does not match ${regex.source}`);
            }
            else {
                throw new Error(errorMessageDelegate(name));
            }
        }
    });
}
exports.match = match;
function nonMatch(regex, errorMessageDelegate) {
    return operator_1.chain(basic_1.string(), (name, mixed) => {
        if (regex.test(mixed)) {
            if (errorMessageDelegate == undefined) {
                throw new Error(`${name} MUST NOT match ${regex.source}`);
            }
            else {
                throw new Error(errorMessageDelegate(name));
            }
        }
        else {
            return mixed;
        }
    });
}
exports.nonMatch = nonMatch;
function email() {
    return match(/^.+@.+$/, name => `${name} must be an email address`);
}
exports.email = email;
//Allows empty string
//Allows uppercase A-F
//Allows lowercase A-F
function hexadecimalString() {
    return match(/^[a-fA-F0-9]*$/, name => `${name} must be a hexadecimal string`);
}
exports.hexadecimalString = hexadecimalString;
//https://dev.mysql.com/doc/refman/8.0/en/storage-requirements.html
function tinyText() {
    return varChar(255); //2^8-1
}
exports.tinyText = tinyText;
function text() {
    return varChar(65535); //2^16-1
}
exports.text = text;
function mediumText() {
    return varChar(16777215); //2^24-1
}
exports.mediumText = mediumText;
function longText() {
    return varChar(4294967295); //2^32-1
}
exports.longText = longText;
function toUpperCase() {
    return operator_1.chain(basic_1.string(), (_name, str) => {
        return str.toUpperCase();
    });
}
exports.toUpperCase = toUpperCase;
function toLowerCase() {
    return operator_1.chain(basic_1.string(), (_name, str) => {
        return str.toLowerCase();
    });
}
exports.toLowerCase = toLowerCase;
function subStringBlacklist(blacklist, configuration = {}) {
    const caseInsensitive = (configuration.caseInsensitive === true);
    if (caseInsensitive) {
        blacklist = blacklist.map(subString => subString.toLowerCase());
    }
    return operator_1.chain(basic_1.string(), (name, str) => {
        if (caseInsensitive) {
            str = str.toLowerCase();
        }
        const found = [];
        for (let subString of blacklist) {
            if (str.indexOf(subString) >= 0) {
                found.push(subString);
            }
        }
        if (found.length == 0) {
            return str;
        }
        else {
            throw new Error(`${name} cannot contain the following: ${blacklist.join(", ")}; found ${found.join(", ")}`);
        }
    });
}
exports.subStringBlacklist = subStringBlacklist;
//# sourceMappingURL=string.js.map