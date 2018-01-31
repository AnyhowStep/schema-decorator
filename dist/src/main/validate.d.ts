export declare const ValidatedSymbol: unique symbol;
export declare type Validated<T> = typeof ValidatedSymbol & T;
export declare function validate<T>(ctor: {
    new (): T;
}): Validated<T>;
export declare function validate<T>(raw: any, ctor: {
    new (): T;
}): Validated<T>;
export declare function validate<T>(name: string, raw: any, ctor: {
    new (): T;
}): Validated<T>;
