"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myUtil = require("./util");
const _ = require("underscore");
exports.REGEX_IGNORE_VARIABLE_NAMES = /(?:^_)|(?:constructor)/;
function keepVariableName(name) {
    return !exports.REGEX_IGNORE_VARIABLE_NAMES.test(name);
}
exports.keepVariableName = keepVariableName;
function toClass(name, raw, ctor) {
    if (raw instanceof ctor) {
        return raw;
    }
    if (!(raw instanceof Object)) {
        throw new Error(`Cannot convert ${typeof raw}(${raw}) to ${ctor.name}`);
    }
    const result = new ctor();
    const variables = myUtil.getAllVariables(result).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${ctor.name} has variables without assertions: ${variables.join(", ")}`);
    }
    const accessors = myUtil.getAllAccessors(result).map(i => i.name);
    const keys = Object.keys(raw);
    const extraKeys = _.difference(keys, accessors);
    if (extraKeys.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${name} has extra keys: ${extraKeys.join(", ")}`);
    }
    try {
        for (let k of keys) {
            result[k] = raw[k];
        }
        const missingKeys = _.difference(accessors, keys);
        for (let k of missingKeys) {
            result[k] = undefined;
        }
    }
    catch (err) {
        const e = err;
        throw new Error(`Cannot convert ${name} to ${ctor.name}: ${e.message}`);
    }
    return result;
}
exports.toClass = toClass;
function anyToRaw(name, mixed) {
    if (mixed instanceof Array) {
        const result = [];
        for (let i = 0; i < mixed.length; ++i) {
            const cur = anyToRaw(`${name}[${i}]`, mixed[i]);
            result.push(cur);
        }
        return result;
    }
    else if (mixed instanceof Date) {
        return new Date(mixed);
    }
    else if (mixed instanceof Object) {
        return toRaw(name, mixed);
    }
    else {
        return mixed;
    }
}
exports.anyToRaw = anyToRaw;
function toRaw(name, instance) {
    const variables = myUtil.getAllVariables(instance).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to raw, the class has variables without assertions: ${variables.join(", ")}`);
    }
    const accessors = myUtil.getAllAccessors(instance).map(a => a.name);
    const result = {};
    try {
        for (let k of accessors) {
            const cur = instance[k];
            result[k] = anyToRaw(`${name}[${k}]`, cur);
        }
    }
    catch (err) {
        const e = err;
        throw new Error(`Cannot convert ${name} to raw: ${e.message}`);
    }
    return result;
}
exports.toRaw = toRaw;
//# sourceMappingURL=convert.js.map