import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    toAssertDelegateExact
} from "../types";
import {or} from "./operator";
import {oneOf} from "./basic";

export function optional<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|undefined> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(undefined),
        assertDelegate
    );
}
export function nullable<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|null> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(null),
        assertDelegate
    );
}
export function maybe<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|undefined|null> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(undefined, null),
        assertDelegate
    );
}

export function notOptional<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, undefined>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === undefined) {
            throw new Error(`${name} cannot be undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}
export function notNullable<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, null>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === null) {
            throw new Error(`${name} cannot be null, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}
export function notMaybe<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, null|undefined>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === null || mixed === undefined) {
            throw new Error(`${name} cannot be null|undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}