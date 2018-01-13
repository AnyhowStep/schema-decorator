import * as myUtil from "./util";
import * as _ from "underscore";
import {Assertion} from "./Assertion";

export const REGEX_IGNORE_VARIABLE_NAMES = /(?:^_)|(?:constructor)/;
export function keepVariableName (name : string) {
    return !REGEX_IGNORE_VARIABLE_NAMES.test(name);
}
export function toClass<T> (name : string, raw : any, ctor : {new():T}) : T {
    if (raw instanceof ctor) {
        return raw;
    }
    if (!(raw instanceof Object)) {
        throw new Error(`Cannot convert ${typeof raw}(${raw}) to ${ctor.name}`);
    }
    let result : T|undefined = undefined;
    try {
        result = new ctor();
    } catch (err) {
        throw new Error(`Could not instantiate ${ctor.name}; ${err.message}`);
    }
    const variables = myUtil.getAllVariables(result).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${ctor.name} has variables without assertions: ${variables.join(", ")}`)
    }

    const accessors = myUtil.getAllAccessors(result).map(i => i.name);

    const keys = Object.keys(raw);
    const rawAccessors = myUtil.getAllAccessors(raw).map(i => i.name);
    for (let i=0; i<keys.length; ++i) {
        if (/^\_/.test(keys[i])) {
            if (rawAccessors.indexOf(keys[i].substr(1)) >= 0) {
                keys[i] = keys[i].substr(1);
            }
        }
    }

    const extraKeys = _.difference(keys, accessors);
    if (extraKeys.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${name} has extra keys: ${extraKeys.join(", ")}`);
    }

    try {
        for (let k of keys) {
            (result as any)[k] = raw[k];
        }

        const missingKeys = _.difference(accessors, keys);
        for (let k of missingKeys) {
            (result as any)[k] = undefined;
        }
    } catch (err) {
        const e = err as Error;
        throw new Error(`Cannot convert ${name} to ${ctor.name}: ${e.message}`);
    }

    return result;
}

export function anyToRaw (name : string, mixed : any, ignoreInstancesOf? : {new(...args:any[]):any}[]) : any {
    if (ignoreInstancesOf != undefined) {
        for (let ctor of ignoreInstancesOf) {
            if (mixed instanceof ctor) {
                return mixed;
            }
        }
    }

    if (mixed instanceof Array) {
        const result : any[] = [];
        for (let i=0; i<mixed.length; ++i) {
            const cur = anyToRaw(`${name}[${i}]`, mixed[i], ignoreInstancesOf);
            result.push(cur);
        }
        return result;
    } else if (mixed instanceof Date) {
        return new Date(mixed);
    } else if (mixed instanceof Object) {
        return toRaw(name, mixed, ignoreInstancesOf);
    } else {
        return mixed;
    }
}

export type Raw<T> = { [k in keyof T] : T[k] };

export function toRaw<T> (name : string, instance : T, ignoreInstancesOf? : {new(...args:any[]):any}[]) : Raw<T> {
    if (ignoreInstancesOf != undefined) {
        for (let ctor of ignoreInstancesOf) {
            if (instance instanceof ctor) {
                return instance;
            }
        }
    }

    const variables = myUtil.getAllVariables(instance).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to raw, the class has variables without assertions: ${variables.join(", ")}`)
    }

    const accessors = myUtil.getAllAccessors(instance).map(a => a.name);
    const result : any = {};
    try {
        for (let k of accessors) {
            const cur = (instance as any)[k];
            result[k] = anyToRaw(`${name}[${k}]`, cur, ignoreInstancesOf);
        }
    } catch (err) {
        const e = err as Error;
        throw new Error(`Cannot convert ${name} to raw: ${e.message}`);
    }
    return result;
}

export function toClassOrAssert<T> (name : string, raw : any, assertion : Assertion<T>) : T {
    if (assertion.isCtor) {
        return toClass(name, raw, assertion.func);
    } else {
        return assertion.func(name, raw);
    }
}
