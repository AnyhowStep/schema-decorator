"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function cast(canCast, castDelegate, assert) {
    const canCastDelegate = types_1.toAssertDelegateExact(canCast);
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        try {
            //If this works, we are already the desired data type
            return assertDelegate(name, mixed);
        }
        catch (err) {
            //Failed. We need to cast.
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //One final check
            return assertDelegate(name, to);
        }
    };
}
exports.cast = cast;
function castFirst(canCast, castDelegate, assert) {
    const canCastDelegate = types_1.toAssertDelegateExact(canCast);
    const assertDelegate = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        try {
            //Attempt to cast first
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //Check that the result is the desired type
            return assertDelegate(name, to);
        }
        catch (err) {
            //We failed to cast, check if the original value is the desired type
            return assertDelegate(name, mixed);
        }
    };
}
exports.castFirst = castFirst;
//# sourceMappingURL=cast.js.map