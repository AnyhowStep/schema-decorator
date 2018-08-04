"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./field");
function schema(...fields) {
    const d = (name, mixed) => {
        if (!(mixed instanceof Object)) {
            throw new Error(`Expected ${name} to be an object; received ${typeof mixed}(${mixed})`);
        }
        const result = {};
        for (let f of fields) {
            result[f.name] = f.assertDelegate(`${name}.${f.name}`, mixed[f.name]);
        }
        return result;
    };
    return d;
}
exports.schema = schema;
//https://github.com/Microsoft/TypeScript/issues/26207
function toSchemaImpl(raw) {
    const fieldCollection = field_1.fields(raw);
    const fieldArray = [];
    for (let k in fieldCollection) {
        if (fieldCollection.hasOwnProperty(k)) {
            //HACK
            fieldArray.push(fieldCollection[k]);
        }
    }
    return schema(...fieldArray);
}
exports.toSchema = toSchemaImpl;
exports.toSchema2 = toSchemaImpl;
exports.toSchema3 = toSchemaImpl;
exports.toSchema4 = toSchemaImpl;
/*
Demonstration of the bug, and why toSchema() requires multiple copies
per level of nesting.

import {number} from "./assert-lib/number";

const n2 = toSchema({
    z : number()
});
const n3 = toSchema({
    z3 : number()
});
const raw = {
    nested2 : n2,
    nested3 : n3
};
const ts = toSchema(raw);
const ts2 = toSchema2(raw);
*/ 
//# sourceMappingURL=schema.js.map