import {
    AnyAssertFunc,
    TypeOf,
    toAssertDelegateExact
} from "./types";

//This returns a function that
//automatically calls `AssertT` on the first parameter
//to validate its type, before passing to to `FuncT`.
//This just reduces boilerplate code.
export function toParameter<
    AssertT extends AnyAssertFunc,
    FuncT   extends (args : TypeOf<AssertT>) => any
> (assert : AssertT, func : FuncT) : (args : TypeOf<AssertT>) => ReturnType<FuncT> {
    const assertDelegate = toAssertDelegateExact(assert);
    return (args : TypeOf<AssertT>) => {
        args = assertDelegate("args", args);
        return func(args);
    };
}
