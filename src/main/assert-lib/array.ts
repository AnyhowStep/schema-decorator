import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    toAssertDelegateExact,
    AcceptsOf
} from "../types";

export function array<F extends AnyAssertFunc> (assert : F) : (
    AssertDelegate<TypeOf<F>[]> &
    {
        __accepts : AcceptsOf<F>[]
    }
) {
    const assertDelegate = toAssertDelegateExact(assert);
    const result : AssertDelegate<TypeOf<F>[]> = (name : string, mixed : unknown) : TypeOf<F>[] => {
        if (!(mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an array, received ${typeof mixed}`);
        }
        let result = mixed;
        let isCopy = false;
        for (let i=0; i<result.length; ++i) {
            const cur = assertDelegate(`${name}[${i}]`, result[i]);
            if (cur !== result[i] && !isCopy) {
                result = result.slice();
                isCopy = true;
            }
            result[i] = cur;
        }
        return result;
    };
    return result as any;
}
