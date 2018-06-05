import { AnyAssertFunc, AssertDelegate, TypeOf } from "../types";
export declare function optional<F extends AnyAssertFunc>(assert: F): AssertDelegate<TypeOf<F> | undefined>;
export declare function nullable<F extends AnyAssertFunc>(assert: F): AssertDelegate<TypeOf<F> | null>;
export declare function maybe<F extends AnyAssertFunc>(assert: F): AssertDelegate<TypeOf<F> | undefined | null>;
export declare function notOptional<F extends AnyAssertFunc>(assert: F): AssertDelegate<Exclude<TypeOf<F>, undefined>>;
export declare function notNullable<F extends AnyAssertFunc>(assert: F): AssertDelegate<Exclude<TypeOf<F>, null>>;
export declare function notMaybe<F extends AnyAssertFunc>(assert: F): AssertDelegate<Exclude<TypeOf<F>, null | undefined>>;
