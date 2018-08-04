import { AnyAssertFunc, AssertDelegate, TypeOf, AcceptsOf } from "../types";
export declare function array<F extends AnyAssertFunc>(assert: F): (AssertDelegate<TypeOf<F>[]> & {
    __accepts: AcceptsOf<F>[];
});
