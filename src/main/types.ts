import * as convert from "./convert";
import {maybe, optional, nullable} from "./assert";

/*
    Everything should be converted into an AssertDelegate.

*/

export type AssertDelegate<T> = (name : string, mixed : any) => T;
export type Constructor<T> = {new():T};
export type AssertFunc<T> = Constructor<T>|AssertDelegate<T>|Field<string, T>;
export type AnyAssertFunc = AssertFunc<any>;
export type TypeOf<F extends AnyAssertFunc> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegate<infer T> ?
    T :
    F extends Field<string, infer T> ?
    T :
    never
);

export class Field<NameT extends string, TypeT> {
    public readonly name : NameT;
    public readonly assert : AssertFunc<TypeT>;
    public readonly assertDelegate : AssertDelegate<TypeT>;
    public constructor (name : NameT, assert : AssertFunc<TypeT>) {
        this.name = name;
        this.assert = assert;
        this.assertDelegate = toAssertDelegateExact(assert);
    }

    public maybe () {
        return new Field(
            this.name,
            maybe(this.assertDelegate)
        );
    }
    public optional () {
        return new Field(
            this.name,
            optional(this.assertDelegate)
        );
    }
    public nullable () {
        return new Field(
            this.name,
            nullable(this.assertDelegate)
        );
    }
    public withName<NewNameT extends string> (name : NewNameT) {
        return new Field(
            name,
            this.assert
        );
    }
    public withAssert<NewTypeT> (assert : AssertFunc<NewTypeT>) {
        return new Field(
            this.name,
            assert
        );
    }
}
export function nested<T> (ctor : Constructor<T>) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    };
}
export function nestedExact<T> (ctor : Constructor<T>) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        const result = convert.toClassExact(name, mixed, ctor);
        return result;
    };
}

export function isCtor<T> (assertFunc : AssertFunc<T>) : assertFunc is Constructor<T> {
    if (assertFunc instanceof Field) {
        return false;
    }
    return assertFunc.length == 0;
}
export function toAssertDelegate<F extends AnyAssertFunc> (assertFunc : F) : AssertDelegate<TypeOf<F>> {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    } else if (isCtor(assertFunc)) {
        return nested(assertFunc as any);
    } else {
        return assertFunc as any;
    }
}
export function toAssertDelegateExact<F extends AnyAssertFunc> (assertFunc : F) : AssertDelegate<TypeOf<F>> {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    } else if (isCtor(assertFunc)) {
        return nestedExact(assertFunc as any);
    } else {
        return assertFunc as any;
    }
}
