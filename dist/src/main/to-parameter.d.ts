import { AnyAssertFunc, TypeOf, AcceptsOf } from "./types";
export declare function toParameter<F0 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>) => any>(f0: F0, func: FuncT): (a0: AcceptsOf<F0>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>) => any>(f0: F0, f1: F1, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>) => any>(f0: F0, f1: F1, f2: F2, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>, a5: TypeOf<F5>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>, a5: AcceptsOf<F5>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>, a5: TypeOf<F5>, a6: TypeOf<F6>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>, a5: AcceptsOf<F5>, a6: AcceptsOf<F6>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>, a5: TypeOf<F5>, a6: TypeOf<F6>, a7: TypeOf<F7>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>, a5: AcceptsOf<F5>, a6: AcceptsOf<F6>, a7: AcceptsOf<F7>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>, a5: TypeOf<F5>, a6: TypeOf<F6>, a7: TypeOf<F7>, a8: TypeOf<F8>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>, a5: AcceptsOf<F5>, a6: AcceptsOf<F6>, a7: AcceptsOf<F7>, a8: AcceptsOf<F8>) => ReturnType<FuncT>;
export declare function toParameter<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, FuncT extends (a0: TypeOf<F0>, a1: TypeOf<F1>, a2: TypeOf<F2>, a3: TypeOf<F3>, a4: TypeOf<F4>, a5: TypeOf<F5>, a6: TypeOf<F6>, a7: TypeOf<F7>, a8: TypeOf<F8>, a9: TypeOf<F9>) => any>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, func: FuncT): (a0: AcceptsOf<F0>, a1: AcceptsOf<F1>, a2: AcceptsOf<F2>, a3: AcceptsOf<F3>, a4: AcceptsOf<F4>, a5: AcceptsOf<F5>, a6: AcceptsOf<F6>, a7: AcceptsOf<F7>, a8: AcceptsOf<F8>, a9: AcceptsOf<F9>) => ReturnType<FuncT>;