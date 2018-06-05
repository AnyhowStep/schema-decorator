"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operator_1 = require("./operator");
const basic_1 = require("./basic");
function finiteNumber() {
    return operator_1.and(basic_1.unsafeNumber(), (name, num) => {
        if (isNaN(num)) {
            throw new Error(`${name} cannot be NaN, received ${num}`);
        }
        if (!isFinite(num)) {
            throw new Error(`${name} must be finite, received ${num}`);
        }
        return num;
    });
}
exports.finiteNumber = finiteNumber;
//Alias for finiteNumber()
function number() {
    return finiteNumber();
}
exports.number = number;
function integer() {
    return operator_1.and(finiteNumber(), (name, num) => {
        if (Math.floor(num) !== num) {
            throw new Error(`${name} must be an integer, received ${num}`);
        }
        return num;
    });
}
exports.integer = integer;
function nonNegativeNumber() {
    return operator_1.and(finiteNumber(), (name, num) => {
        if (num < 0) {
            throw new Error(`${name} cannot be negative, received ${num}`);
        }
        return num;
    });
}
exports.nonNegativeNumber = nonNegativeNumber;
function naturalNumber() {
    return operator_1.and(integer(), nonNegativeNumber());
}
exports.naturalNumber = naturalNumber;
//# sourceMappingURL=number.js.map