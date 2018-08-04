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
    return array_like_1.length(basic_1.string(), arg0, arg1);
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
            throw new Error(`${name} does not match ${regex.source}, received ${mixed}`);
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
            throw new Error(`${name} must be an email address, received ${mixed}`);
        }
    });
}
exports.email = email;
//# sourceMappingURL=string.js.map