"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function array(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    const result = (name, mixed) => {
        if (!(mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an array, received ${typeof mixed}`);
        }
        let result = mixed;
        let isCopy = false;
        for (let i = 0; i < result.length; ++i) {
            const cur = assertDelegate(`${name}[${i}]`, result[i]);
            if (cur !== result[i] && !isCopy) {
                result = result.slice();
                isCopy = true;
            }
            result[i] = cur;
        }
        return result;
    };
    return result;
}
exports.array = array;
//# sourceMappingURL=array.js.map