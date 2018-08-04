import { AssertDelegate, AnyAssertFunc, TypeOf, AcceptsOf } from "../types";
export declare function maxLength<F extends AnyAssertFunc>(assert: F, max: number): (AssertDelegate<TypeOf<F> & {
    length: number;
}> & {
    __accepts: AcceptsOf<F>;
});
export declare function minLength<F extends AnyAssertFunc>(assert: F, min: number): (AssertDelegate<TypeOf<F> & {
    length: number;
}> & {
    __accepts: AcceptsOf<F>;
});
export declare function length<F extends AnyAssertFunc>(assert: F, max: number): (AssertDelegate<TypeOf<F> & {
    length: number;
}> & {
    __accepts: AcceptsOf<F>;
});
export declare function length<F extends AnyAssertFunc>(assert: F, min: number, max: number): (AssertDelegate<TypeOf<F> & {
    length: number;
}> & {
    __accepts: AcceptsOf<F>;
});
export declare function length<F extends AnyAssertFunc>(assert: F, arg0: number, arg1?: number): (AssertDelegate<TypeOf<F> & {
    length: number;
}> & {
    __accepts: AcceptsOf<F>;
});
