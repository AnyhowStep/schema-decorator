export declare type AssertDelegate<T> = (name: string, mixed: any) => T;
export declare type Constructor<T> = {
    new (): T;
};
export declare type AssertFunc<T> = Constructor<T> | AssertDelegate<T> | Field<string, T>;
export declare type TypeOf<T extends AssertFunc<any>> = (T extends Constructor<infer R> ? R : T extends AssertDelegate<infer R> ? R : T extends Field<string, infer R> ? R : never);
export declare class Field<NameT extends string, TypeT> {
    readonly name: NameT;
    readonly assert: AssertFunc<TypeT>;
    readonly assertDelegate: AssertDelegate<TypeT>;
    constructor(name: NameT, assert: AssertFunc<TypeT>);
    maybe(): Field<NameT, TypeT | null | undefined>;
    optional(): Field<NameT, TypeT | undefined>;
    nullable(): Field<NameT, TypeT | null>;
    withName<NewNameT extends string>(name: NewNameT): Field<NewNameT, TypeT>;
    withAssert<NewTypeT>(assert: AssertFunc<NewTypeT>): Field<NameT, NewTypeT>;
}
export declare function nested<T>(ctor: Constructor<T>): AssertDelegate<T>;
export declare function nestedExact<T>(ctor: Constructor<T>): AssertDelegate<T>;
export declare function isCtor<T>(assertFunc: AssertFunc<T>): assertFunc is Constructor<T>;
export declare function toAssertDelegate<T>(assertFunc: AssertFunc<T>): AssertDelegate<T>;
export declare function toAssertDelegateExact<T>(assertFunc: AssertFunc<T>): AssertDelegate<T>;
