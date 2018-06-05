import {AssertDelegate} from "../types";
import {oneOf} from "./basic";

//Please only pass enums here
export enum Enum {}
export function enumeration<E extends typeof Enum> (e : E) : AssertDelegate<E[keyof E]>;
export function enumeration (e : {}) : AssertDelegate<string|number>;
export function enumeration (e : {}) : AssertDelegate<string|number> {
    const keys = Object.keys(e).filter((k) => {
        return !/^\d/.test(k)
    });
    const values = keys.map((k) => {
        return (e as any)[k];
    }).filter((v) : v is string|number => {
        return (
            typeof v == "string" ||
            typeof v == "number"
        );
    });
    return oneOf(...values);
}