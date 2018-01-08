import * as convert from "./convert";
import * as validation from "@anyhowstep/data-validation";
import {AssertDelegate} from "./AssertDelegate";

export type CastDelegate<FromT, ToT> = (from : FromT) => ToT;
export type Constructor<T> = {new():T};

export function nested<T> (ctor : Constructor<T>) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    };
}
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
export function or<T0 extends string> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function or<T0 extends number> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function or<T0 extends boolean> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function or<T0> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function or<T0, T1> (...arr : AssertDelegate<T0|T1>[]) : AssertDelegate<T0|T1>;
export function or<T0, T1, T2> (...arr : AssertDelegate<T0|T1|T2>[]) : AssertDelegate<T0|T1|T2>;
export function or<T0, T1, T2, T3> (...arr : AssertDelegate<T0|T1|T2|T3>[]) : AssertDelegate<T0|T1|T2|T3>;
export function or<T0, T1, T2, T3, T4> (...arr : AssertDelegate<T0|T1|T2|T3|T4>[]) : AssertDelegate<T0|T1|T2|T3|T4>;
export function or (...arr : AssertDelegate<any>[]) : AssertDelegate<any>;
export function or<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        let messages : string[] = [];
        for (let d of arr) {
            try {
                return d(name, mixed);
            } catch (err) {
                messages.push(`(${err.message})`);
            }
        }
        throw new Error(messages.join(" or "));
    };
}
export function and<T0 extends string> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function and<T0 extends number> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function and<T0 extends boolean> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function and<T0> (...arr : AssertDelegate<T0>[]) : AssertDelegate<T0>;
export function and<T0, T1> (...arr : AssertDelegate<T0|T1>[]) : AssertDelegate<T0&T1>;
export function and<T0, T1, T2> (...arr : AssertDelegate<T0|T1|T2>[]) : AssertDelegate<T0&T1&T2>;
export function and<T0, T1, T2, T3> (...arr : AssertDelegate<T0|T1|T2|T3>[]) : AssertDelegate<T0&T1&T2&T3>;
export function and<T0, T1, T2, T3, T4> (...arr : AssertDelegate<T0|T1|T2|T3|T4>[]) : AssertDelegate<T0&T1&T2&T3&T4>;
export function and (...arr : AssertDelegate<any>[]) : AssertDelegate<any>;
export function and<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        for (let d of arr) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
export function cast<FromT, ToT> (canCastDelegate : AssertDelegate<FromT>, castDelegate : CastDelegate<FromT, ToT>, assertDelegate : AssertDelegate<ToT>) : AssertDelegate<ToT> {
    return (name : string, mixed : any) : ToT => {
        try {
            //If this works, we are already the desired data type
            return assertDelegate(name, mixed);
        } catch (err) {
            //Failed. We need to cast.
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //One final check
            return assertDelegate(name, to);
        }
    };
}
export function assert<T> (assertDelegate : AssertDelegate<T>) {
    return (target : Object, propertyKey : string | symbol) : void => {
        if ((target as any)[propertyKey] !== undefined) {
            throw new Error(`Property ${propertyKey.toString()} must have a start value of undefined`);
        }
        delete (target as any)[propertyKey];
        const propertyName = (typeof propertyKey == "string") ?
            propertyKey : `Symbol(${propertyKey.toString()})`;
        const privateName = `_${propertyName}`;
        Object.defineProperty(target, propertyKey, {
            get : function (this : any) {
                return this[privateName];
            },
            set : function (this : any, mixed : any) {
                this[privateName] = assertDelegate(propertyName, mixed);
            },
        });
    };
}

//Convenience
export function optional<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|undefined> {
    return or(
        oneOf(undefined),
        assertDelegate
    );
}
export function nullable<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|null> {
    return or(
        oneOf(null),
        assertDelegate
    );
}
export function maybe<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|undefined|null> {
    return or<T|undefined|null>(
        oneOf(undefined, null),
        assertDelegate
    );
}

//Array
export function array<T> (assertDelegate : AssertDelegate<T>) {
    return (name : string, mixed : any) : T[] => {
        if (!(mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an array, received ${typeof mixed}`);
        }
        let isCopy = false;
        for (let i=0; i<mixed.length; ++i) {
            const cur = assertDelegate(`${name}[${i}]`, mixed[i]);
            if (cur !== mixed[i] && !isCopy) {
                mixed = mixed.slice();
                isCopy = true;
            }
            mixed[i] = cur;
        }
        return mixed;
    };
}

export function date () : AssertDelegate<Date> {
    return (name : string, mixed : any) : Date => {
        if (typeof mixed == "string") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        } else if (typeof mixed == "number") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        } else if (mixed instanceof Date) {
            return mixed;
        } else {
            throw new Error(`Expected ${name} to be a Date, Date string, or Date number`);
        }
    };
}

export function any () : AssertDelegate<any> {
    return (_name : string, mixed : any) : any => {
        return mixed;
    };
}

//Please only pass enums here
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

//Convenience
export function boolean () : AssertDelegate<boolean> {
    return validation.Boolean.assertBoolean;
}
export function number () : AssertDelegate<number> {
    return validation.Number.assertFiniteNumber;
}
export function integer () : AssertDelegate<number> {
    return validation.Number.assertInteger;
}
export function naturalNumber () : AssertDelegate<number> {
    return validation.Number.assertNaturalNumber;
}
export function string () : AssertDelegate<string> {
    return validation.String.assertString;
}
export function nil () : AssertDelegate<null> {
    //Using this because data-validation is bugged
    return (name : string, mixed : any) => {
        if (mixed === null) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
export function undef () : AssertDelegate<undefined> {
    //Using this because data-validation is bugged
    return (name : string, mixed : any) => {
        if (mixed === undefined) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}
