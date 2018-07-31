import { AnyAssertFunc, TypeOf } from "./types";
export declare function toParameter<AssertT extends AnyAssertFunc, FuncT extends (args: TypeOf<AssertT>) => any>(assert: AssertT, func: FuncT): (args: TypeOf<AssertT>) => ReturnType<FuncT>;
