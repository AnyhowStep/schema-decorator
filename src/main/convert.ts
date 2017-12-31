import * as myUtil from "./util";
import * as _ from "underscore";

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
    const result = new ctor();

    const variables = myUtil.getAllVariables(result).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to ${ctor.name}, ${ctor.name} has variables without assertions: ${variables.join(", ")}`)
    }

    const accessors = myUtil.getAllAccessors(result).map(i => i.name);

    const keys = Object.keys(raw);

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

export function anyToRaw (name : string, mixed : any) : any {
    if (mixed instanceof Array) {
        const result : any[] = [];
        for (let i=0; i<mixed.length; ++i) {
            const cur = anyToRaw(`${name}[${i}]`, mixed[i]);
            result.push(cur);
        }
        return result;
    } else if (mixed instanceof Date) {
        return new Date(mixed);
    } else if (mixed instanceof Object) {
        return toRaw(name, mixed);
    } else {
        return mixed;
    }
}

export type Raw<T> = { [k in keyof T] : T[k] };

export function toRaw<T> (name : string, instance : T) : Raw<T> {
    const variables = myUtil.getAllVariables(instance).map(i => i.name).filter(keepVariableName);
    if (variables.length > 0) {
        throw new Error(`Cannot convert ${name} to raw, the class has variables without assertions: ${variables.join(", ")}`)
    }

    const accessors = myUtil.getAllAccessors(instance).map(a => a.name);
    const result : any = {};
    try {
        for (let k of accessors) {
            const cur = (instance as any)[k];
            result[k] = anyToRaw(`${name}[${k}]`, cur);
        }
    } catch (err) {
        const e = err as Error;
        throw new Error(`Cannot convert ${name} to raw: ${e.message}`);
    }
    return result;
}
