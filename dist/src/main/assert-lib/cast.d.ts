import { AnyAssertFunc, AssertDelegate, TypeOf, AcceptsOf } from "../types";
export declare type CastDelegate<FromT, ToT> = (from: FromT) => ToT;
export declare function cast<FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): AssertDelegate<TypeOf<ToF>> & {
    __accepts: AcceptsOf<FromF> | AcceptsOf<ToF>;
};
export declare function castFirst<FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): AssertDelegate<TypeOf<ToF>> & {
    __accepts: AcceptsOf<FromF> | AcceptsOf<ToF>;
};
