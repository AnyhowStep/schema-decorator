import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    toAssertDelegateExact,
    CanAcceptOf
} from "./types";

export type StrictAssertDelegate<F extends AnyAssertFunc> = (
    AssertDelegate<TypeOf<F>> &
    {
        //Make the input type the same as the output type
        __accepts : TypeOf<F>,
        //Preserve what it could originally accept
        __canAccept : CanAcceptOf<F>,
    }
)
export function strict<F extends AnyAssertFunc> (
    f : F
) : (
    StrictAssertDelegate<F>
) {
    return toAssertDelegateExact(f) as any;
}

export type RelaxedAssertDelegate<F extends AnyAssertFunc> = (
    AssertDelegate<TypeOf<F>> &
    {
        //Make it accept everything it can
        __accepts : CanAcceptOf<F>,
        __canAccept : CanAcceptOf<F>,
    }
);
export function relaxed<F extends AnyAssertFunc> (
    f : F
) : (
    RelaxedAssertDelegate<F>
) {
    return toAssertDelegateExact(f) as any;
}