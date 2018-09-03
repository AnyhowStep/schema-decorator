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
function match(regex) {
    return operator_1.chain(basic_1.string(), (name, mixed) => {
        if (regex.test(mixed)) {
            return mixed;
        }
        else {
            throw new Error(`${name} does not match ${regex.source}`);
        }
    });
}
exports.match = match;
function email() {
    return operator_1.chain(basic_1.string(), (name, mixed) => {
        if (/^.+@.+$/.test(mixed)) {
            return mixed;
        }
        else {
            throw new Error(`${name} must be an email address`);
        }
    });
}
exports.email = email;
//Allows empty string
//Allows uppercase A-F
//Allows lowercase A-F
function hexadecimalString() {
    return operator_1.chain(basic_1.string(), (name, mixed) => {
        if (/^[a-fA-F0-9]*$/.test(mixed)) {
            return mixed;
        }
        throw new Error(`${name} must be a hexadecimal string`);
    });
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
//# sourceMappingURL=string.js.map