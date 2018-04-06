"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myUtil = require("./util");
const _ = require("underscore");
//Note, must match the prefix given by assert.ts assert<T>()
exports.REGEX_IGNORE_VARIABLE_NAMES = /(?:^____hijacked-by-schema-decorator-)|(?:^constructor$)/;
function keepVariableName(name) {
    return !exports.REGEX_IGNORE_VARIABLE_NAMES.test(name);
}
exports.keepVariableName = keepVariableName;
//Originally used Symbol but when projects
//start having different versions of this package,
//it all breaks down.
exports.IGNORE_EXTRA_VARIABLES = `____hijacked-by-schema-decorator-IGNORE_EXTRA_VARIABLES`;
//Class decorator, when this is on a class,
//toClass() will ignore extra variables on the raw object
function ignoreExtraVariables(ctor) {
    const result = class extends ctor {
    };
    //A hack to preserve the original name and also mark that it has been decorated
    Object.defineProperty(result, "name", {
        value: `@ignoreExtraVariables(${ctor.name})`,
    });
    /*Object.defineProperty(result, IGNORE_EXTRA_VARIABLES, {
        value : true,
    });*/
    return result;
}
exports.ignoreExtraVariables = ignoreExtraVariables;
function toClass(name, raw, ctor) {
    if (raw instanceof ctor) {
        return raw;
    }
    if (!(raw instanceof Object)) {
        throw new Error(`Cannot convert ${typeof raw}(${raw}) to ${ctor.name}`);
    }
    let result = undefined;
    try {
        result = new ctor();
    }
    catch (err) {
        throw new Error(`Could not instantiate ${ctor.name}; ${err.message}`);
    }
    const variables = myUtil.getAllVariables(result).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${ctor.name} has variables without assertions: ${variables.join(", ")}`);
    }
    const accessors = myUtil.getAllAccessors(result).map(i => i.name);
    const keys = Object.keys(raw);
    const extraKeys = _.difference(keys, accessors);
    //UGLY HACK
    if (extraKeys.length > 0 && !ctor.name.startsWith("@ignoreExtraVariables(")) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${name} has extra keys: ${extraKeys.join(", ")}`);
    }
    try {
        for (let k of accessors) {
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
function anyToRaw(name, mixed, ignoreInstancesOf) {
    if (ignoreInstancesOf != undefined) {
        for (let ctor of ignoreInstancesOf) {
            if (mixed instanceof ctor) {
                return mixed;
            }
        }
    }
    if (mixed instanceof Array) {
        const result = [];
        for (let i = 0; i < mixed.length; ++i) {
            const cur = anyToRaw(`${name}[${i}]`, mixed[i], ignoreInstancesOf);
            result.push(cur);
        }
        return result;
    }
    else if (mixed instanceof Date) {
        return new Date(mixed);
    }
    else if (mixed instanceof Object) {
        if (Object.getPrototypeOf(mixed).constructor == Object) {
            //This object is already as "raw" as we can get
            //Its values might not be, though
            const result = Object.assign({}, mixed);
            for (let k in mixed) {
                if (mixed.hasOwnProperty(k)) {
                    result[k] = anyToRaw(`${name}[${k}]`, mixed[k], ignoreInstancesOf);
                }
            }
            return result;
        }
        else {
            return toRaw(name, mixed, ignoreInstancesOf);
        }
    }
    else {
        return mixed;
    }
}
exports.anyToRaw = anyToRaw;
function toRaw(name, instance, ignoreInstancesOf) {
    if (ignoreInstancesOf != undefined) {
        for (let ctor of ignoreInstancesOf) {
            if (instance instanceof ctor) {
                return instance;
            }
        }
    }
    const variables = myUtil.getAllVariables(instance).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to raw, the class has variables without assertions: ${variables.join(", ")}`);
    }
    const accessors = myUtil.getAllAccessors(instance).map(a => a.name);
    const result = {};
    try {
        for (let k of accessors) {
            const cur = instance[k];
            result[k] = anyToRaw(`${name}[${k}]`, cur, ignoreInstancesOf);
        }
    }
    catch (err) {
        const e = err;
        throw new Error(`Cannot convert ${name} to raw: ${e.message}`);
    }
    return result;
}
exports.toRaw = toRaw;
function toClassOrAssert(name, raw, assertion) {
    if (assertion.isCtor) {
        return toClass(name, raw, assertion.func);
    }
    else {
        return assertion.func(name, raw);
    }
}
exports.toClassOrAssert = toClassOrAssert;
//Give two classes, Base and Derived, toClassExact<Base>() will convert Derived to Base, if possible
function toClassExact(name, raw, ctor) {
    if (myUtil.isExactInstanceOf(raw, ctor)) {
        return raw;
    }
    else {
        return toClass(name, anyToRaw(name, raw), ctor);
    }
}
exports.toClassExact = toClassExact;
//# sourceMappingURL=convert.js.map