import * as schema from "../main/index";
import * as tape from "tape";

function sortInternalKeys (x : Object) {
    if (x instanceof Array) {
        const arr : any = [];
        for (let i of x) {
            arr.push(sortInternalKeys(i));
        }
        return arr;
    } else if (x instanceof Date) {
        return x;
    } else if (x instanceof Object) {
        const keys = Object.keys(x).sort();
        const result : any = {};
        for (let k of keys) {
            result[k] = sortInternalKeys((x as any)[k]);
        }
        return result;
    } else {
        return x;
    }
}

export function test<C> (t : tape.Test, ctor : {new():C}, raw : any, expected? : any) {
    if (expected == null) {
        expected = raw;
    }
    const originalRawStr = JSON.stringify(raw);

    const f : C = schema.toClass("raw", raw, ctor);

    const currentRawStr = JSON.stringify(raw);
    t.equal(currentRawStr, originalRawStr, `raw: ${currentRawStr} == ${originalRawStr}`);

    const actualStr = JSON.stringify(sortInternalKeys(schema.toRaw("instance", f)));
    const expectedStr = JSON.stringify(sortInternalKeys(expected));
    t.equal(actualStr, expectedStr, `${actualStr} == ${expectedStr}`);
}
export function fail<C> (t : tape.Test, ctor : {new():C}, raw : any) {
    try {
        schema.toClass("raw", raw, ctor);
        t.fail();
    } catch (err) {
        t.pass(err.message);
    }
}
