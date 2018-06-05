import { AnyAssertFunc, AssertDelegate, TypeOf } from "../types";
export declare type CastDelegate<FromT, ToT> = (from: FromT) => ToT;
export declare function cast<FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): AssertDelegate<TypeOf<ToF>>;
export declare function castFirst<FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): AssertDelegate<TypeOf<ToF>>;
