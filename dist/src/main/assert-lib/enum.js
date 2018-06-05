"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
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
    return basic_1.oneOf(...values);
}
exports.enumeration = enumeration;
//# sourceMappingURL=enum.js.map