import {
    AnyAssertFunc,
    AssertDelegate,
    TypeOf,
    toAssertDelegateExact
} from "../types";

export function array<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>[]> {
    const assertDelegate = toAssertDelegateExact(assert);
    return (name : string, mixed : any) : TypeOf<F>[] => {
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
