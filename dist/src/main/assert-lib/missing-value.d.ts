import { AnyAssertFunc } from "../types";
export declare function optional<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<(F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never) | undefined> & {
    __accepts: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | undefined;
    __canAccept: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __canAccept: unknown;
    } ? F["__canAccept"] : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__canAccept"] : never) | undefined;
};
export declare function nullable<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<(F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never) | null> & {
    __accepts: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | null;
    __canAccept: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __canAccept: unknown;
    } ? F["__canAccept"] : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__canAccept"] : never) | null;
};
export declare function maybe<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<(F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never) | null | undefined> & {
    __accepts: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__accepts"] : never) | null | undefined;
    __canAccept: (F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
        __canAccept: unknown;
    } ? F["__canAccept"] : F extends ((name: string, mixed: unknown) => infer T) & {
        __accepts: unknown;
    } ? F["__accepts"] : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: infer AcceptsT) => any ? AcceptsT : F extends import("../types").Field<string, any> ? F["assertDelegate"]["__canAccept"] : never) | null | undefined;
};
export declare function notOptional<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<Exclude<F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never, undefined>>;
export declare function notNullable<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<Exclude<F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never, null>>;
export declare function notMaybe<F extends AnyAssertFunc>(assert: F): import("../types").AssertDelegate<Exclude<F extends import("../types").Constructor<infer T> ? T : F extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F extends import("../types").AssertDelegate<infer T> ? T : F extends (name: string, accepts: any) => infer T ? T : F extends import("../types").Field<string, infer F2> ? F2 extends import("../types").Constructor<infer T> ? T : F2 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F2 extends import("../types").AssertDelegate<infer T> ? T : F2 extends import("../types").Field<string, infer F3> ? F3 extends import("../types").Constructor<infer T> ? T : F3 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F3 extends import("../types").AssertDelegate<infer T> ? T : F3 extends import("../types").Field<string, infer F4> ? F4 extends import("../types").Constructor<infer T> ? T : F4 extends ((name: string, mixed: unknown) => infer T) & {
    __accepts: unknown;
} ? T : F4 extends import("../types").AssertDelegate<infer T> ? T : never : never : never : never, null | undefined>>;
