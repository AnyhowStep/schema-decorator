"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const cast_1 = require("./cast");
types_1.Field;
/*
    Modifies `mixed` directly

    const f = rename("x", "y", sd.stringToNaturalNumber())

    f("obj", { x : "34" })  //Gives us { y : 34 }
    f("obj", { y : "34" })  //Gives us { y : 34 }
    f("obj", { })           //Error
*/
function rename(fromKey, toKey, assert) {
    const d = types_1.toAssertDelegateExact(assert);
    return (name, mixed) => {
        if (mixed.hasOwnProperty(fromKey)) {
            const fromValue = mixed[fromKey];
            mixed[toKey] = d(`[${name}.${fromKey} -> ${name}.${toKey}]`, fromValue);
            delete mixed[fromKey];
            return mixed;
        }
        else {
            const toValue = mixed[toKey];
            mixed[toKey] = d(`${name}.${toKey}`, toValue);
            return mixed;
        }
    };
}
exports.rename = rename;
/*
    Modifies `mixed` directly

    const f = deriveFrom(
        "x",
        "y",
        sd.naturalNumberString(),
        parseInt,
        sd.naturalNumber()
    );

    f("obj", { x : "34" })           //Gives us { x : "34", y : 34 }
    f("obj", { x : "34", y : 100 })  //Gives us { x : "34", y : 34 }
    f("obj", { y : 34})              //Error; expected `x` to be string; received undefined
    f("obj", { })                    //Error
*/
function deriveFrom(fromKey, toKey, canCast, castDelegate, assert) {
    const canCastD = types_1.toAssertDelegateExact(canCast);
    const castD = cast_1.cast(canCast, castDelegate, assert);
    return (name, mixed) => {
        mixed[fromKey] = canCastD(`${name}.${fromKey}`, mixed[fromKey]);
        mixed[toKey] = castD(`[${name}.${fromKey} > ${name}.${toKey}]`, mixed[fromKey]);
        return mixed;
    };
}
exports.deriveFrom = deriveFrom;
//# sourceMappingURL=object.js.map