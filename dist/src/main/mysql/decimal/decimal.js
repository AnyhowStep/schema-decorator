"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sd = require("../../assert-lib");
/*
    For now, returns a string.
    Converting to a number risks losing precision.
*/
function decimal() {
    return sd.or(sd.numberToString(), sd.match(/^(\+|\-)?\d+(\.\d+)?$/, name => `Expected ${name} to be a DECIMAL string`));
}
exports.decimal = decimal;
decimal.nullable = () => sd.nullable(decimal());
//# sourceMappingURL=decimal.js.map