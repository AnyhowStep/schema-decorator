import {TypeOf, AssertDelegate, AnyAssertFunc, toAssertDelegateExact} from "../types";

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

export type LiteralType = string|number|boolean|undefined|null;
export type LiteralValues<ArrT extends LiteralType[]> = (
    ArrT extends Array<infer T> ?
        T:
        never
)
export function literal<ArrT extends LiteralType[]> (...arr : ArrT) : (
    AssertDelegate<LiteralValues<ArrT>>
) {
    return (name : string, mixed : unknown) : (
        LiteralValues<ArrT>
    ) => {
        for (let item of arr) {
            if (mixed === item) {
                return mixed as any;
            }
        }
        throw new Error(`Expected ${name} to be one of ${toTypeStr(arr)}; received ${typeof mixed}(${mixed})`);
    };
}

export function excludeLiteral<
    F extends AnyAssertFunc,
    ArrT extends LiteralType[]
> (assert : F, ...arr : ArrT) : (
    AssertDelegate<Exclude<
        TypeOf<F>,
        LiteralValues<ArrT>
    >>
) {
    const assertDelegate = toAssertDelegateExact(assert);
    return (name : string, mixed : unknown) => {
        const value = assertDelegate(name, mixed);
        for (let item of arr) {
            if (value === item) {
                throw new Error(`${name} cannot be one of ${toTypeStr(arr)}; received ${typeof value}(${value})`);
            }
        }
        return value as any;
    };
}

export function boolean () : AssertDelegate<boolean> {
    return (name : string, mixed : unknown) : boolean => {
        if (typeof mixed != "boolean") {
            throw new Error(`${name} must be a boolean, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}
export function unsafeNumber () : AssertDelegate<number> {
    return (name : string, mixed : unknown) : number => {
        if (typeof mixed != "number") {
            throw new Error(`${name} must be a number, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}

export function string () : AssertDelegate<string> {
    return (name : string, mixed : unknown) : string => {
        if (typeof mixed != "string") {
            throw new Error(`${name} must be a string, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}

export function nil () : AssertDelegate<null> {
    return (name : string, mixed : unknown) => {
        if (mixed === null) {
            return null;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
export function undef () : AssertDelegate<undefined> {
    return (name : string, mixed : unknown) => {
        if (mixed === undefined) {
            return undefined;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}

export function unknown () : AssertDelegate<unknown> {
    return (_name : string, mixed : unknown) : unknown => {
        return mixed;
    }
}
