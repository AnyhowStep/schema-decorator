import {AssertDelegate, AnyAssertFunc, TypeOf, toAssertDelegateExact, AcceptsOf} from "../types";
import {naturalNumber} from "./number";
import {chain} from "./operator";

export function maxLength<F extends AnyAssertFunc> (
    assert : F,
    max : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
) {
    const assertDelegate = toAssertDelegateExact(assert);

    const result : AssertDelegate<TypeOf<F> & { length : number }> =  (name : string, mixed : unknown) => {
        const value : any = assertDelegate(name, mixed);
        const length = naturalNumber()(`${name}.length`, value.length);
        if (length > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${length}`);
        }
        return value;
    };
    return result as any;
}
export function minLength<F extends AnyAssertFunc> (
    assert : F,
    min : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
) {
    const assertDelegate = toAssertDelegateExact(assert);

    const result : AssertDelegate<TypeOf<F> & { length : number }> =  (name : string, mixed : unknown) => {
        const value : any = assertDelegate(name, mixed);
        const length = naturalNumber()(`${name}.length`, value.length);
        if (length < min) {
            throw new Error(`${name} cannot be shorter than ${min}, received ${length}`);
        }
        return value;
    };
    return result as any;
}

export function length<F extends AnyAssertFunc> (
    assert : F,
    max : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
)
export function length<F extends AnyAssertFunc> (
    assert : F,
    min : number,
    max : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
)
export function length<F extends AnyAssertFunc> (
    assert : F,
    arg0 : number,
    arg1? : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
)
export function length<F extends AnyAssertFunc> (
    assert : F,
    arg0 : number,
    arg1? : number
) : (
    AssertDelegate<TypeOf<F> & { length : number }> &
    {
        __accepts : AcceptsOf<F>
    }
) {
    if (arg1 == undefined) {
        return maxLength(assert, arg0);
    } else {
        return chain(
            minLength(assert, arg0),
            maxLength(assert, arg1)
        );
    }
}