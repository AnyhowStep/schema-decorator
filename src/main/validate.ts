export const ValidatedSymbol = Symbol();
export type Validated<T> = typeof ValidatedSymbol & T;

import {toClass} from "./convert";

export function validate<T> (ctor : {new():T}) : Validated<T>;
export function validate<T> (raw : any, ctor : {new():T}) : Validated<T>;
export function validate<T> (name : string, raw : any, ctor : {new():T}) : Validated<T>;
export function validate<T> (arg0 : any, arg1? : any, arg2? : any) : Validated<T> {
    if (arg2 == undefined) {
        if (arg1 == undefined) {
            //Only arg0 is set
            return new arg0();
        } else {
            //Only arg0 and arg1 are set
            return validate("raw", arg0, arg1);
        }
    } else {
        const result : T = toClass(arg0, arg1, arg2);
        return result as Validated<T>;
    }
}
