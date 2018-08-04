import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    AcceptsOf,
    toAssertDelegateExact
} from "../types";

export type CastDelegate<FromT, ToT> = (from : FromT) => ToT;

export function cast<
    FromF extends AnyAssertFunc,
    ToF extends AnyAssertFunc
> (
    canCast : FromF,
    castDelegate : CastDelegate<TypeOf<FromF>, TypeOf<ToF>>,
    assert : ToF
) : AssertDelegate<TypeOf<ToF>> & { __accepts : AcceptsOf<FromF>|AcceptsOf<ToF> } {
    const canCastDelegate = toAssertDelegateExact(canCast);
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) : TypeOf<ToF> => {
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
    }) as any;
}
export function castFirst<
    FromF extends AnyAssertFunc,
    ToF extends AnyAssertFunc
> (
    canCast : FromF,
    castDelegate : CastDelegate<TypeOf<FromF>, TypeOf<ToF>>,
    assert : ToF
) : AssertDelegate<TypeOf<ToF>> & { __accepts : AcceptsOf<FromF>|AcceptsOf<ToF> } {
    const canCastDelegate = toAssertDelegateExact(canCast);
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) : TypeOf<ToF> => {
        try {
            //Attempt to cast first
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //Check that the result is the desired type
            return assertDelegate(name, to);
        } catch (err) {
            //We failed to cast, check if the original value is the desired type
            return assertDelegate(name, mixed);
        }
    }) as any;
}