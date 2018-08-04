import {
    AnyAssertFunc,
    toAssertDelegateExact,
    TypeOf,
    Field,
    AssertDelegate,
    AcceptsOf,
} from "../types";
import {CastDelegate, cast} from "./cast";

Field;

/*
    Use with `and()`

    const f = rename("x", "y", sd.stringToNaturalNumber())

    f("obj", { x : "34" })              //Gives us { y : 34 }
    f("obj", { y : "34" })              //Gives us { y : 34 }
    f("obj", { x : "34", y : "99" })    //Gives us { y : 99 }
    f("obj", { })                       //Error
*/
export function rename<
    FromFieldNameT extends string,
    ToFieldNameT extends string,
    AssertFuncT extends AnyAssertFunc
> (fromKey : FromFieldNameT, toKey : ToFieldNameT, assert : AssertFuncT) : (
    AssertDelegate<{
        [field in ToFieldNameT] : TypeOf<AssertFuncT>
    }> &
    {
        __accepts : (
            { [from in FromFieldNameT] : AcceptsOf<AssertFuncT> } |
            { [to in ToFieldNameT]     : AcceptsOf<AssertFuncT> }
        )
    }
) {
    const d = toAssertDelegateExact(assert);
    const result : AssertDelegate<{
        [field in ToFieldNameT] : TypeOf<AssertFuncT>
    }> = (name : string, mixed : any) : {
        [field in ToFieldNameT] : TypeOf<AssertFuncT>
    } => {
        if (mixed.hasOwnProperty(toKey)) {
            const toValue = mixed[toKey];
            const obj : any = {};
            obj[toKey] = d(
                `${name}.${toKey}`,
                toValue
            );
            return obj;
        } else {
            const fromValue = mixed[fromKey];
            const obj : any = {};
            obj[toKey] = d(
                `[${name}.${fromKey} -> ${name}.${toKey}]`,
                fromValue
            );
            return obj;
        }
    };
    return result as any;
}

/*
    Use with `and()`

    const f = deriveFrom(
        "x",
        "y",
        sd.naturalNumberString(),
        parseInt,
        sd.naturalNumber()
    );

    f("obj", { x : "34" })           //Gives us { x : "34", y : 34 }
    f("obj", { x : "34", y : 100 })  //Gives us { x : "34", y : 34 }
    f("obj", { y : 34})              //Error; expected `x` to be string; received undefined
    f("obj", { })                    //Error
*/
export function deriveFrom<
    FromFieldNameT extends string,
    ToFieldNameT extends string,
    FromF extends AnyAssertFunc,
    ToF extends AnyAssertFunc
> (
    fromKey : FromFieldNameT,
    toKey : ToFieldNameT,
    canCast : FromF,
    castDelegate : CastDelegate<TypeOf<FromF>, TypeOf<ToF>>,
    assert : ToF
) : (
    AssertDelegate<{
        [field in FromFieldNameT|ToFieldNameT] : (
            field extends FromFieldNameT ?
            TypeOf<FromF> :
            field extends ToFieldNameT ?
            TypeOf<ToF> :
            never
        )
    }> &
    {
        __accepts : {
            [from in FromFieldNameT] : (
                AcceptsOf<FromF>|
                AcceptsOf<ToF>
            )
        }
    }
) {
    const canCastD = toAssertDelegateExact(canCast);
    const castD = cast(canCast, castDelegate, assert);

    const result : AssertDelegate<{
        [field in FromFieldNameT|ToFieldNameT] : (
            field extends FromFieldNameT ?
            TypeOf<FromF> :
            field extends ToFieldNameT ?
            TypeOf<ToF> :
            never
        )
    }> = (name : string, mixed : any) : {
        [field in FromFieldNameT|ToFieldNameT] : (
            field extends FromFieldNameT ?
            TypeOf<FromF> :
            field extends ToFieldNameT ?
            TypeOf<ToF> :
            never
        )
    } => {
        const obj : any = {};

        obj[fromKey] = canCastD(
            `${name}.${fromKey}`,
            mixed[fromKey]
        );

        obj[toKey] = castD(
            `[${name}.${fromKey} > ${name}.${toKey}]`,
            obj[fromKey]
        );
        return obj;
    };
    return result as any;
}

export function instanceOf<T> (ctor : new (...args : any[]) => T) : (
    AssertDelegate<T> &
    {
        __accepts : T
    }
) {
    const result : AssertDelegate<T> = (name : string, mixed : unknown) : T => {
        if (mixed instanceof ctor) {
            return mixed;
        } else {
            throw new Error(`Expected ${name} to be an instance of ${ctor.name}`);
        }
    };
    return result as any;
}