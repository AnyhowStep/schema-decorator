import {AssertDelegate} from "../types";
import {literal} from "./basic";
import {or} from "./operator";

//Please only pass enums here
export enum Enum {}
export function enumeration<E extends typeof Enum> (e : E) : (
    AssertDelegate<E[keyof E]> &
    {
        __accepts : (
            Extract<keyof E, string>|
            E[keyof E]
        )
    }
) {
    const keys = Object.keys(e)
        .filter((k) => {
            if (/^\d/.test(k)) {
                return false;
            }
            const v = (e as any)[k];
            return (
                typeof v == "string" ||
                typeof v == "number"
            );
        });
    const values = keys.map(k => (e as any)[k]);
    return literal(...values) as any;
}

export function enumerationKey<E extends typeof Enum> (e : E) : (
    AssertDelegate<Extract<keyof E, string>> &
    {
        __accepts : (
            Extract<keyof E, string>|
            E[keyof E]
        )
    }
) {
    const keys = Object.keys(e)
        .filter((k) => {
            if (/^\d/.test(k)) {
                return false;
            }
            const v = (e as any)[k];
            return (
                typeof v == "string" ||
                typeof v == "number"
            );
        });
    return literal(...keys) as any;
}

//Will attempt to cast between key <-> value
export function toEnumeration<E extends typeof Enum> (e : E) : (
    AssertDelegate<E[keyof E]> &
    {
        __accepts : (
            Extract<keyof E, string>|
            E[keyof E]
        )
    }
) {
    const keys = Object.keys(e)
        .filter((k) => {
            if (/^\d/.test(k)) {
                return false;
            }
            const v = (e as any)[k];
            return (
                typeof v == "string" ||
                typeof v == "number"
            );
        });
    const values = keys.map(k => (e as any)[k]);
    const field = values.concat(
        keys.filter(k => values.indexOf(k) < 0)
    );
    return or(
        literal(...values),
        //Not a value, so maybe a key
        (name : string, mixed : unknown) => {
            for (let k of keys) {
                if (k === mixed) {
                    //This key maps to this value
                    return (e as any)[k];;
                }
            }
            throw new Error(`Expected ${name} to be one of ${field.join("|")}}; received ${typeof mixed}(${mixed})`);
        }
    ) as any;
}

export function toEnumerationKey<E extends typeof Enum> (e : E) : (
    AssertDelegate<Extract<keyof E, string>> &
    {
        __accepts : (
            Extract<keyof E, string>|
            E[keyof E]
        )
    }
) {
    const keys = Object.keys(e)
        .filter((k) => {
            if (/^\d/.test(k)) {
                return false;
            }
            const v = (e as any)[k];
            return (
                typeof v == "string" ||
                typeof v == "number"
            );
        });
    const values = keys.map(k => (e as any)[k]);
    const field = keys.concat(
        values.filter(v => keys.indexOf(v) < 0)
    );
    return or(
        literal(...keys),
        //Not a key, so maybe a value
        (name : string, mixed : unknown) => {
            for (let k of keys) {
                const v = (e as any)[k];
                if (v === mixed) {
                    //This value belongs to this key
                    return k;
                }
            }
            throw new Error(`Expected ${name} to be one of ${field.join("|")}; received ${typeof mixed}(${mixed})`);
        }
    ) as any;
}