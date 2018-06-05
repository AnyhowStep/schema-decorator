import {AssertDelegate} from "../types";

function toTypeStr (arr : any[]) : string {
    const mapped = arr.map((i) => {
        if (i === null) {
            return "null";
        } else if (i === undefined) {
            return "undefined";
        } else {
            return i;
        }
    });
    return mapped.join("|")
}
export function oneOf<T0 extends string> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0 extends number> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0 extends boolean> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0, T1> (...arr : (T0|T1)[]) : AssertDelegate<T0|T1>;
export function oneOf<T0, T1, T2> (...arr : (T0|T1|T2)[]) : AssertDelegate<T0|T1|T2>;
export function oneOf<T0, T1, T2, T3> (...arr : (T0|T1|T2|T3)[]) : AssertDelegate<T0|T1|T2|T3>;
export function oneOf<T0, T1, T2, T3, T4> (...arr : (T0|T1|T2|T3|T4)[]) : AssertDelegate<T0|T1|T2|T3|T4>;
export function oneOf (...arr : (any)[]) : AssertDelegate<any>;
export function oneOf<T> (...arr : T[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        for (let item of arr) {
            if (mixed === item) {
                return mixed;
            }
        }
        throw new Error(`Expected ${name} to be one of ${toTypeStr(arr)}; received ${typeof mixed}(${mixed})`);
    };
}

export function boolean () : AssertDelegate<boolean> {
    return (name : string, mixed : any) : boolean => {
        if (typeof mixed != "boolean") {
            throw new Error(`${name} must be a boolean, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}
export function unsafeNumber () : AssertDelegate<number> {
    return (name : string, mixed : any) : number => {
        if (typeof mixed != "number") {
            throw new Error(`${name} must be a number, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}

export function string () : AssertDelegate<string> {
    return (name : string, mixed : any) : string => {
        if (typeof mixed != "string") {
            throw new Error(`${name} must be a string, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}

export function nil () : AssertDelegate<null> {
    return (name : string, mixed : any) => {
        if (mixed === null) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
export function undef () : AssertDelegate<undefined> {
    return (name : string, mixed : any) => {
        if (mixed === undefined) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}

export function any () : AssertDelegate<any> {
    return (_name : string, mixed : any) : any => {
        return mixed;
    };
}
