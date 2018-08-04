import { AnyAssertFunc, AcceptsOf, TypeOf } from "./types";
export declare function check<F extends AnyAssertFunc>(f: F, name: string, mixed: AcceptsOf<F>): TypeOf<F>;
