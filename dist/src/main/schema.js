"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = require("./field");
function schema(...fields) {
    return (name, mixed) => {
        if (!(mixed instanceof Object)) {
            throw new Error(`Expected ${name} to be an object; received ${typeof mixed}(${mixed})`);
        }
        const result = {};
        for (let f of fields) {
            result[f.name] = f.assertDelegate(`${name}.${f.name}`, mixed[f.name]);
        }
        return result;
    };
}
exports.schema = schema;
function toSchema(raw) {
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
exports.toSchema = toSchema;
//# sourceMappingURL=schema.js.map