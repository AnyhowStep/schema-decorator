import { AnyAssertFunc, AssertDelegate, TypeOf } from "../types";
export declare function array<F extends AnyAssertFunc>(assert: F): AssertDelegate<TypeOf<F>[]>;
