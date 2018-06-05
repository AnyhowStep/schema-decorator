"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function array(assert) {
    const assertDelegate = types_1.toAssertDelegateExact(assert);
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
//# sourceMappingURL=array.js.map