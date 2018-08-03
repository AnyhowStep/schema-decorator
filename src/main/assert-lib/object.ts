import {
    AnyAssertFunc,
    toAssertDelegateExact,
    TypeOf,
    Field
} from "../types";
import {CastDelegate, cast} from "./cast";

Field;

/*
    Modifies `mixed` directly

    const f = rename("x", "y", sd.stringToNaturalNumber())

    f("obj", { x : "34" })  //Gives us { y : 34 }
    f("obj", { y : "34" })  //Gives us { y : 34 }
    f("obj", { })           //Error
*/
export function rename<
    FromFieldNameT extends string,
    ToFieldNameT extends string,
    AssertFuncT extends AnyAssertFunc
> (fromKey : FromFieldNameT, toKey : ToFieldNameT, assert : AssertFuncT) {
    const d = toAssertDelegateExact(assert);
    return (name : string, mixed : any) : {
        [field in ToFieldNameT] : TypeOf<AssertFuncT>
    } => {
        if (mixed.hasOwnProperty(fromKey)) {
            const fromValue = mixed[fromKey];
            mixed[toKey] = d(
                `[${name}.${fromKey} -> ${name}.${toKey}]`,
                fromValue
            );
            delete mixed[fromKey];
            return mixed;
        } else {
            const toValue = mixed[toKey];
            mixed[toKey] = d(
                `${name}.${toKey}`,
                toValue
            );
            return mixed;
        }
    };
}

/*
    Modifies `mixed` directly

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
) {
    const canCastD = toAssertDelegateExact(canCast);
    const castD = cast(canCast, castDelegate, assert);

    return (name : string, mixed : any) : {
        [field in FromFieldNameT|ToFieldNameT] : (
            field extends FromFieldNameT ?
            TypeOf<FromF> :
            field extends ToFieldNameT ?
            TypeOf<ToF> :
            never
        )
    } => {
        mixed[fromKey] = canCastD(
            `${name}.${fromKey}`,
            mixed[fromKey]
        );

        mixed[toKey] = castD(
            `[${name}.${fromKey} > ${name}.${toKey}]`,
            mixed[fromKey]
        );
        return mixed;
    };
}