import { AssertDelegate } from "../types";
export declare function oneOf<T0 extends string>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0 extends number>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0 extends boolean>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0, T1>(...arr: (T0 | T1)[]): AssertDelegate<T0 | T1>;
export declare function oneOf<T0, T1, T2>(...arr: (T0 | T1 | T2)[]): AssertDelegate<T0 | T1 | T2>;
export declare function oneOf<T0, T1, T2, T3>(...arr: (T0 | T1 | T2 | T3)[]): AssertDelegate<T0 | T1 | T2 | T3>;
export declare function oneOf<T0, T1, T2, T3, T4>(...arr: (T0 | T1 | T2 | T3 | T4)[]): AssertDelegate<T0 | T1 | T2 | T3 | T4>;
export declare function oneOf(...arr: (any)[]): AssertDelegate<any>;
export declare function boolean(): AssertDelegate<boolean>;
export declare function unsafeNumber(): AssertDelegate<number>;
export declare function string(): AssertDelegate<string>;
export declare function nil(): AssertDelegate<null>;
export declare function undef(): AssertDelegate<undefined>;
export declare function any(): AssertDelegate<any>;