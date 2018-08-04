import { AnyAssertFunc, AcceptsOf, TypeOf, toAssertDelegateExact } from "./types";

export function check<F extends AnyAssertFunc> (
    f : F,
    name : string,
    mixed : AcceptsOf<F>
) : TypeOf<F> {
    const d = toAssertDelegateExact(f);
    return d(name, mixed);
}