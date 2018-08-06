import * as convert from "./convert";
import {
    maybe,
    optional,
    nullable,
    notMaybe,
    notOptional,
    notNullable
} from "./assert-lib/missing-value";

/*
    Everything should be converted into an AssertDelegate.
*/
export type AssertDelegate<T> = (name : string, mixed : unknown) => T;
export type AssertDelegateAccepts<T, AcceptsT=unknown> = (
    ((name : string, mixed : unknown) => T) &
    {
        __accepts : AcceptsT
    }
);
export type ChainedAssertDelegate<T, AcceptsT=any> = (
    (name : string, accepts : AcceptsT) => T
);

export type Constructor<T> = {new():T};
export type AssertFunc<T> = (
    Constructor<T>|
    AssertDelegateAccepts<T>|
    AssertDelegate<T>|
    Field<string, (
        Constructor<T>|
        AssertDelegateAccepts<T>|
        AssertDelegate<T>|
        Field<string, (
            Constructor<T>|
            AssertDelegateAccepts<T>|
            AssertDelegate<T>|
            Field<string, (
                //This is enough recursion, right?
                Constructor<T>|
                AssertDelegateAccepts<T>|
                AssertDelegate<T>
            )>
        )>
    )>
);
export type AnyAssertFunc = AssertFunc<any>;

export type ChainedAssertFunc<AcceptsT> = (
    Constructor<AcceptsT>|
    AssertDelegateAccepts<any, AcceptsT>|
    AssertDelegate<AcceptsT>|
    ChainedAssertDelegate<any, AcceptsT>|
    Field<string, (
        Constructor<AcceptsT>|
        AssertDelegateAccepts<any, AcceptsT>|
        AssertDelegate<AcceptsT>|
        Field<string, (
            Constructor<AcceptsT>|
            AssertDelegateAccepts<any, AcceptsT>|
            AssertDelegate<AcceptsT>|
            Field<string, (
                //This is enough recursion, right?
                Constructor<AcceptsT>|
                AssertDelegateAccepts<any, AcceptsT>|
                AssertDelegate<AcceptsT>
            )>
        )>
    )>
);

export type TypeOf<F extends AnyAssertFunc|ChainedAssertDelegate<any>> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegateAccepts<infer T> ?
    T :
    F extends AssertDelegate<infer T> ?
    T :
    F extends ChainedAssertDelegate<infer T> ?
    T :
    F extends Field<string, infer F2> ?
    (
        F2 extends Constructor<infer T> ?
        T :
        F2 extends AssertDelegateAccepts<infer T> ?
        T :
        F2 extends AssertDelegate<infer T> ?
        T :
        F2 extends Field<string, infer F3> ?
        (
            F3 extends Constructor<infer T> ?
            T :
            F3 extends AssertDelegateAccepts<infer T> ?
            T :
            F3 extends AssertDelegate<infer T> ?
            T :
            F3 extends Field<string, infer F4> ?
            (
                F4 extends Constructor<infer T> ?
                T :
                F4 extends AssertDelegateAccepts<infer T> ?
                T :
                F4 extends AssertDelegate<infer T> ?
                T :
                //This is enough recursion, right?
                never
            ) :
            never
        ) :
        never
    ) :
    never
);

//Like TypeOf, but unsafe
export type UnsafeTypeOf<F> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegateAccepts<infer T> ?
    T :
    F extends AssertDelegate<infer T> ?
    T :
    F extends ChainedAssertDelegate<infer T> ?
    T :
    F extends Field<string, infer F2> ?
    (
        F2 extends Constructor<infer T> ?
        T :
        F2 extends AssertDelegateAccepts<infer T> ?
        T :
        F2 extends AssertDelegate<infer T> ?
        T :
        F2 extends Field<string, infer F3> ?
        (
            F3 extends Constructor<infer T> ?
            T :
            F3 extends AssertDelegateAccepts<infer T> ?
            T :
            F3 extends AssertDelegate<infer T> ?
            T :
            F3 extends Field<string, infer F4> ?
            (
                F4 extends Constructor<infer T> ?
                T :
                F4 extends AssertDelegateAccepts<infer T> ?
                T :
                F4 extends AssertDelegate<infer T> ?
                T :
                //This is enough recursion, right?
                never
            ) :
            never
        ) :
        never
    ) :
    never
);

export type AcceptsOf<F extends AnyAssertFunc|ChainedAssertDelegate<any>> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegateAccepts<infer T> ?
    F["__accepts"] :
    F extends AssertDelegate<infer T> ?
    T :
    F extends ChainedAssertDelegate<any, infer AcceptsT> ?
    AcceptsT :
    F extends Field<string, any> ?
    F["assertDelegate"]["__accepts"] :
    never
);

//Like AcceptsOf, but unsafe
export type UnsafeAcceptsOf<F> = (
    F extends Constructor<infer T> ?
    T :
    F extends AssertDelegateAccepts<infer T> ?
    F["__accepts"] :
    F extends AssertDelegate<infer T> ?
    T :
    F extends ChainedAssertDelegate<any, infer AcceptsT> ?
    AcceptsT :
    F extends Field<string, any> ?
    F["assertDelegate"]["__accepts"] :
    never
);

export type ToAssertDelegate<F extends AnyAssertFunc> = (
    AssertDelegate<TypeOf<F>> &
    {
        __accepts : AcceptsOf<F>
    }
);

export class Field<NameT extends string, F extends AnyAssertFunc> {
    public readonly name : NameT;
    public readonly assert : F;
    public readonly assertDelegate : ToAssertDelegate<F>;
    public constructor (name : NameT, assert : F) {
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
    public notMaybe () {
        return new Field(
            this.name,
            notMaybe(this.assertDelegate)
        );
    }
    public notOptional () {
        return new Field(
            this.name,
            notOptional(this.assertDelegate)
        );
    }
    public notNullable () {
        return new Field(
            this.name,
            notNullable(this.assertDelegate)
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
    public assertType (name : string, mixed : any) : TypeOf<F>;
    public assertType (mixed : any) : TypeOf<F>;
    public assertType (arg0 : any, arg1? : any) : TypeOf<F> {
        if (arg1 == undefined) {
            return this.assertDelegate(this.name, arg0);
        } else {
            return this.assertDelegate(arg0, arg1);
        }
    }
}
export type AnyField = Field<any, any>;

export function nested<T> (ctor : Constructor<T>) : (
    AssertDelegate<T> &
    {
        __accepts : T
    }
) {
    return ((name : string, mixed : any) : T => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    }) as any;
}
export function nestedExact<T> (ctor : Constructor<T>) : (
    AssertDelegate<T> &
    {
        __accepts : T
    }
) {
    return ((name : string, mixed : any) : T => {
        const result = convert.toClassExact(name, mixed, ctor);
        return result;
    }) as any;
}

export function isCtor<T> (assertFunc : AssertFunc<T>) : assertFunc is Constructor<T> {
    if (assertFunc instanceof Field) {
        return false;
    }
    return assertFunc.length == 0;
}
export function toAssertDelegate<F extends AnyAssertFunc> (assertFunc : F) : ToAssertDelegate<F> {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    } else if (isCtor(assertFunc)) {
        return nested(assertFunc as any) as any;
    } else {
        return assertFunc as any;
    }
}
export function toAssertDelegateExact<F extends AnyAssertFunc> (assertFunc : F) : ToAssertDelegate<F> {
    if (assertFunc instanceof Field) {
        return assertFunc.assertDelegate;
    } else if (isCtor(assertFunc)) {
        return nestedExact(assertFunc as any) as any;
    } else {
        return assertFunc as any;
    }
}

export type Chainable<
    FromT extends any,
    ToF extends AnyAssertFunc|ChainedAssertDelegate<any>
> = (
    FromT extends AnyAssertFunc|ChainedAssertDelegate<any> ?
        (
            TypeOf<FromT> extends AcceptsOf<ToF> ?
                true :
                false
        ) :
        FromT extends AcceptsOf<ToF> ?
            true :
            false
);