import { AnyAssertFunc } from "../types";
export declare function optional<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<(F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never) | undefined> & {
    __accepts: (F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("main/types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | undefined;
};
export declare function nullable<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<(F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never) | null> & {
    __accepts: (F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("main/types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | null;
};
export declare function maybe<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<(F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never) | null | undefined> & {
    __accepts: (F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("main/types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | null | undefined;
};
export declare function notOptional<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<Exclude<F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never, undefined>>;
export declare function notNullable<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<Exclude<F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never, null>>;
export declare function notMaybe<F extends AnyAssertFunc>(assert: F): import("main/types").AssertDelegate<Exclude<F extends import("main/types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("main/types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("main/types").Field<string, infer F2> ? F2 extends import("main/types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("main/types").AssertDelegate<infer T> ? T : F2 extends import("main/types").Field<string, infer F3> ? F3 extends import("main/types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("main/types").AssertDelegate<infer T> ? T : F3 extends import("main/types").Field<string, infer F4> ? F4 extends import("main/types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("main/types").AssertDelegate<infer T> ? T : never : never : never : never, null | undefined>>;
