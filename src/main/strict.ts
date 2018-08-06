import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    toAssertDelegateExact,
    CanAcceptOf
} from "./types";

export function strict<F extends AnyAssertFunc> (
    f : F
) : (
    AssertDelegate<TypeOf<F>> &
    {
        //Make the input type the same as the output type
        __accepts : TypeOf<F>,
        //Preserve what it could originally accept
        __canAccept : CanAcceptOf<F>,
    }
) {
    return toAssertDelegateExact(f) as any;
}

export function relaxed<F extends AnyAssertFunc> (
    f : F
) : (
    AssertDelegate<TypeOf<F>> &
    {
        //Make it accept everything it can
        __accepts : CanAcceptOf<F>,
        __canAccept : CanAcceptOf<F>,
    }
) {
    return toAssertDelegateExact(f) as any;
}