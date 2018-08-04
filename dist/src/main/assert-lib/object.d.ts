import { AnyAssertFunc, TypeOf, AssertDelegate, AcceptsOf } from "../types";
import { CastDelegate } from "./cast";
export declare function rename<FromFieldNameT extends string, ToFieldNameT extends string, AssertFuncT extends AnyAssertFunc>(fromKey: FromFieldNameT, toKey: ToFieldNameT, assert: AssertFuncT): (AssertDelegate<{
    [field in ToFieldNameT]: TypeOf<AssertFuncT>;
}> & {
    __accepts: ({
        [from in FromFieldNameT]: AcceptsOf<AssertFuncT>;
    } | {
        [to in ToFieldNameT]: AcceptsOf<AssertFuncT>;
    });
});
export declare function deriveFrom<FromFieldNameT extends string, ToFieldNameT extends string, FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(fromKey: FromFieldNameT, toKey: ToFieldNameT, canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): (AssertDelegate<{
    [field in FromFieldNameT | ToFieldNameT]: (field extends FromFieldNameT ? TypeOf<FromF> : field extends ToFieldNameT ? TypeOf<ToF> : never);
}> & {
    __accepts: {
        [from in FromFieldNameT]: (AcceptsOf<FromF> | AcceptsOf<ToF>);
    };
});
export declare function instanceOf<T>(ctor: new (...args: any[]) => T): (AssertDelegate<T> & {
    __accepts: T;
});
export declare function dictionary<F extends AnyAssertFunc>(assert: F): (AssertDelegate<{
    [key: string]: TypeOf<F>;
}> & {
    __accepts: {
        [key: string]: AcceptsOf<F>;
    };
});
