"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatedSymbol = Symbol();
const convert_1 = require("./convert");
function validate(arg0, arg1, arg2) {
    if (arg2 == undefined) {
        if (arg1 == undefined) {
            //Only arg0 is set
            return new arg0();
        }
        else {
            //Only arg0 and arg1 are set
            return validate("raw", arg0, arg1);
        }
    }
    else {
        const result = convert_1.toClass(arg0, arg1, arg2);
        return result;
    }
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map