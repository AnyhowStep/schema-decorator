import * as validation from "@anyhowstep/data-validation";
import {
    AssertDelegate,
    AssertFunc,
    AnyAssertFunc,
    TypeOf,
    nested,
    toAssertDelegateExact,
    Field
} from "./types";
import {Assertion} from "./Assertion";
import * as myUtil from "./util";
import {spread} from "@anyhowstep/type-util";

Field; //For implicit type inference

export type CastDelegate<FromT, ToT> = (from : FromT) => ToT;

//TODO delete
export function assertion<T> (assertion : Assertion<T>) : AssertDelegate<T> {
    if (assertion.isCtor) {
        return nested(assertion.func);
    } else {
        return assertion.func;
    }
}
function toTypeStr (arr : any[]) : string {
    const mapped = arr.map((i) => {
        if (i === null) {
            return "null";
        } else if (i === undefined) {
            return "undefined";
        } else {
            return i;
        }
    });
    return mapped.join("|")
}
export function oneOf<T0 extends string> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0 extends number> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0 extends boolean> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0> (...arr : (T0)[]) : AssertDelegate<T0>;
export function oneOf<T0, T1> (...arr : (T0|T1)[]) : AssertDelegate<T0|T1>;
export function oneOf<T0, T1, T2> (...arr : (T0|T1|T2)[]) : AssertDelegate<T0|T1|T2>;
export function oneOf<T0, T1, T2, T3> (...arr : (T0|T1|T2|T3)[]) : AssertDelegate<T0|T1|T2|T3>;
export function oneOf<T0, T1, T2, T3, T4> (...arr : (T0|T1|T2|T3|T4)[]) : AssertDelegate<T0|T1|T2|T3|T4>;
export function oneOf (...arr : (any)[]) : AssertDelegate<any>;
export function oneOf<T> (...arr : T[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        for (let item of arr) {
            if (mixed === item) {
                return mixed;
            }
        }
        throw new Error(`Expected ${name} to be one of ${toTypeStr(arr)}; received ${typeof mixed}(${mixed})`);
    };
}
/*
function gen (n) {
let args0 = [];
let args1 = [];
let args2 = [];
for (let i=0; i<n; ++i) {
    args0.push(`F${i} extends AnyAssertFunc`);
    args1.push(`f${i} : F${i}`);
    args2.push(`TypeOf<F${i}>`);
}
return `export function or<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("|")}>;`;
}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
export function or<F0 extends AnyAssertFunc> (f0 : F0) : AssertDelegate<TypeOf<F0>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>|TypeOf<F1>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>|TypeOf<F18>>;
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc, F19 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>|TypeOf<F18>|TypeOf<F19>>;
export function or<F extends AnyAssertFunc> (...arr : F[]) : AssertDelegate<TypeOf<F>>;
export function or<F extends AnyAssertFunc> (...arr : F[]) : AssertDelegate<TypeOf<F>>  {
    const assertDelegates = arr.map(toAssertDelegateExact);
    return (name : string, mixed : any) : TypeOf<F> => {
        let messages : string[] = [];
        for (let d of assertDelegates) {
            try {
                return d(name, mixed);
            } catch (err) {
                messages.push(`(${err.message})`);
            }
        }
        throw new Error(messages.join(" or "));
    };
}
/*
function gen (n) {
	let args0 = [];
	let args1 = [];
	let args2 = [];
	for (let i=0; i<n; ++i) {
		args0.push(`T${i}`);
		args1.push(`i${i} : AssertFunc<T${i}>`);
		args2.push(`T${i}`);
	}
	return `export function and<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("&")}>;`;
}
arr = [];
for (let i=1; i<21; ++i) {
	arr.push(gen(i));
}
arr.join("\n");
*/
export function and<F0 extends AnyAssertFunc> (f0 : F0) : AssertDelegate<TypeOf<F0>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>&TypeOf<F1>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>>;
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc, F19 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>&TypeOf<F19>>;
export function and<F extends AnyAssertFunc> (...arr : F[]) : AssertDelegate<TypeOf<F>> {
    const assertDelegates = arr.map(toAssertDelegateExact);
    return (name : string, mixed : any) : TypeOf<F> => {
        for (let d of assertDelegates) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
export function cast<
    FromF extends AnyAssertFunc,
    ToF extends AnyAssertFunc
> (
    canCast : FromF,
    castDelegate : CastDelegate<TypeOf<FromF>, TypeOf<ToF>>,
    assert : ToF
) : AssertDelegate<TypeOf<ToF>> {
    const canCastDelegate = toAssertDelegateExact(canCast);
    const assertDelegate = toAssertDelegateExact(assert);
    return (name : string, mixed : any) : TypeOf<ToF> => {
        try {
            //If this works, we are already the desired data type
            return assertDelegate(name, mixed);
        } catch (err) {
            //Failed. We need to cast.
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //One final check
            return assertDelegate(name, to);
        }
    };
}
export function castFirst<
    FromF extends AnyAssertFunc,
    ToF extends AnyAssertFunc
> (
    canCast : FromF,
    castDelegate : CastDelegate<TypeOf<FromF>, TypeOf<ToF>>,
    assert : ToF
) : AssertDelegate<TypeOf<ToF>> {
    const canCastDelegate = toAssertDelegateExact(canCast);
    const assertDelegate = toAssertDelegateExact(assert);
    return (name : string, mixed : any) : TypeOf<ToF> => {
        try {
            //Attempt to cast first
            const from = canCastDelegate(name, mixed);
            const to = castDelegate(from);
            //Check that the result is the desired type
            return assertDelegate(name, to);
        } catch (err) {
            //We failed to cast, check if the original value is the desired type
            return assertDelegate(name, mixed);
        }
    };
}
export function assert<F extends AnyAssertFunc> (assert : F) {
    const assertDelegate = toAssertDelegateExact(assert);
    return (target : Object, propertyKey : string | symbol) : void => {
        const propertyName = (typeof propertyKey == "string") ?
            propertyKey : `Symbol(${propertyKey.toString()})`;
        const privateName = `____hijacked-by-schema-decorator-${propertyName}`;

        const superAccessorGenerator = myUtil.getAccessor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            get : function (this : any) {
                return this[privateName];
            },
            set : function (this : any, mixed : any) {
                //If we are here, we have the accessor defined on the class prototype,
                //but not on the instance itself.
                //We want to preserve the behaviour of Object.keys(),
                //So, we need to define the accessor on the instance.

                let superSetter : undefined|((v: any) => void) = undefined;
                if (superAccessorGenerator != undefined && superAccessorGenerator.set != undefined) {
                    superAccessorGenerator.set.bind(this)(mixed);
                    const accessor = Object.getOwnPropertyDescriptor(this, propertyKey);
                    if (!myUtil.isAccessorDescriptor(accessor) || accessor.set == undefined) {
                        throw new Error(`Expected ${propertyKey.toString()} to be an accessor and have a "set()" method`);
                    }
                    superSetter = accessor.set.bind(this);
                }

                //Set the value on the instance first,
                //We define a property that is not enumerable,
                //So it does not show up in Object.keys().
                //We don't want this property to show up because
                //its name is `privateName`, not the "original" name.
                if (superSetter == undefined) {
                    Object.defineProperty(this, privateName, {
                        value : assertDelegate(propertyName, mixed),
                        writable : true,
                        enumerable : false,
                    });
                } else {
                    superSetter(assertDelegate(propertyName, mixed));
                }
                //We define the accessor that should be used from now on
                //And will be enumerable with Object.keys(instance)
                Object.defineProperty(this, propertyName, {
                    get : function (this : any) {
                        return this[privateName];
                    },
                    set : function (this : any, mixed : any) {
                        if (superSetter == undefined) {
                            this[privateName] = assertDelegate(propertyName, mixed);
                        } else {
                            superSetter(assertDelegate(propertyName, mixed));
                        }
                    },
                    enumerable : true,
                    configurable : true,
                });
            },
            enumerable : true,
        });
    };
}

//Convenience
export function optional<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|undefined> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(undefined),
        assertDelegate
    );
}
export function nullable<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|null> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(null),
        assertDelegate
    );
}
export function maybe<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>|undefined|null> {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        oneOf(undefined, null),
        assertDelegate
    );
}

export function notOptional<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, undefined>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === undefined) {
            throw new Error(`${name} cannot be undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}
export function notNullable<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, null>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === null) {
            throw new Error(`${name} cannot be null, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}
export function notMaybe<F extends AnyAssertFunc> (assert : F) : AssertDelegate<Exclude<TypeOf<F>, null|undefined>> {
    const assertDelegate = toAssertDelegateExact(assert);
    return ((name : string, mixed : any) => {
        if (mixed === null || mixed === undefined) {
            throw new Error(`${name} cannot be null|undefined, received ${mixed}`);
        }
        return assertDelegate(name, mixed);
    }) as any;
}

//Array
export function array<F extends AnyAssertFunc> (assert : F) : AssertDelegate<TypeOf<F>[]> {
    const assertDelegate = toAssertDelegateExact(assert);
    return (name : string, mixed : any) : TypeOf<F>[] => {
        if (!(mixed instanceof Array)) {
            throw new Error(`Expected ${name} to be an array, received ${typeof mixed}`);
        }
        let isCopy = false;
        for (let i=0; i<mixed.length; ++i) {
            const cur = assertDelegate(`${name}[${i}]`, mixed[i]);
            if (cur !== mixed[i] && !isCopy) {
                mixed = mixed.slice();
                isCopy = true;
            }
            mixed[i] = cur;
        }
        return mixed;
    };
}

export function date () : AssertDelegate<Date> {
    return (name : string, mixed : any) : Date => {
        if (typeof mixed == "string") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        } else if (typeof mixed == "number") {
            const result = new Date(mixed);
            return validation.Date.assertValidDate(name, result);
        } else if (mixed instanceof Date) {
            return mixed;
        } else {
            throw new Error(`Expected ${name} to be a Date, Date string, or Date number`);
        }
    };
}

export function any () : AssertDelegate<any> {
    return (_name : string, mixed : any) : any => {
        return mixed;
    };
}

//Please only pass enums here
export enum Enum {}
export function enumeration<E extends typeof Enum> (e : E) : AssertDelegate<E[keyof E]>;
export function enumeration (e : {}) : AssertDelegate<string|number>;
export function enumeration (e : {}) : AssertDelegate<string|number> {
    const keys = Object.keys(e).filter((k) => {
        return !/^\d/.test(k)
    });
    const values = keys.map((k) => {
        return (e as any)[k];
    }).filter((v) : v is string|number => {
        return (
            typeof v == "string" ||
            typeof v == "number"
        );
    });
    return oneOf(...values);
}

//Convenience
export function boolean () : AssertDelegate<boolean> {
    return validation.Boolean.assertBoolean;
}
export function number () : AssertDelegate<number> {
    return validation.Number.assertFiniteNumber;
}
export function integer () : AssertDelegate<number> {
    return validation.Number.assertInteger;
}
export function naturalNumber () : AssertDelegate<number> {
    return validation.Number.assertNaturalNumber;
}
export function string () : AssertDelegate<string> {
    return validation.String.assertString;
}
export function numberToBoolean () : AssertDelegate<boolean> {
    return cast(
        validation.Number.assertFiniteNumber,
        (raw : number) => {
            return (raw != 0);
        },
        validation.Boolean.assertBoolean
    );
}
export function stringToBoolean () : AssertDelegate<boolean> {
    return cast(
        validation.String.assertString,
        (raw : string) => {
            if (raw == "1" || raw.toLowerCase() == "true") {
                return true;
            } else {
                return false;
            }
        },
        validation.Boolean.assertBoolean
    );
}
export function stringToNumber () : AssertDelegate<number> {
    return cast(
        validation.NumberString.assertFiniteNumberString,
        parseFloat,
        validation.Number.assertFiniteNumber
    );
}
export function stringToInteger () : AssertDelegate<number> {
    return cast(
        validation.NumberString.assertIntegerString,
        parseInt,
        validation.Number.assertInteger
    );
}
export function stringToNaturalNumber () : AssertDelegate<number> {
    return cast(
        validation.NumberString.assertNaturalNumberString,
        parseInt,
        validation.Number.assertNaturalNumber
    );
}
export function nil () : AssertDelegate<null> {
    //Using this because data-validation is bugged
    return (name : string, mixed : any) => {
        if (mixed === null) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
export function undef () : AssertDelegate<undefined> {
    //Using this because data-validation is bugged
    return (name : string, mixed : any) => {
        if (mixed === undefined) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}


export function varChar (min : number, max : number) : AssertDelegate<string>;
export function varChar (max : number) : AssertDelegate<string>;
export function varChar (arg0 : number, arg1? : number) : AssertDelegate<string> {
    if (arg1 == undefined) {
        return validation.String.assertMaxLengthHandler(arg0);
    } else {
        return validation.String.assertLengthHandler({
            min : arg0,
            max : arg1,
        });
    }
}
export function numberToTrue () : AssertDelegate<true> {
    return (name : string, mixed : any) : true => {
        const b = numberToBoolean()(name, mixed);
        return oneOf(true)(name, b);
    };
}
export function numberToFalse () : AssertDelegate<false> {
    return (name : string, mixed : any) : false => {
        const b = numberToBoolean()(name, mixed);
        return oneOf(false)(name, b);
    };
}
export function jsonObjectStr () : AssertDelegate<string> {
    return (name : string, str : string) : string => {
        validation.String.assertString(name, str);
        let jsonObject : Object|undefined = undefined;
        try {
            jsonObject = JSON.parse(str);
        } catch (err) {
            throw new Error(`Expected ${name} to be a valid JSON string; ${err.message}`);
        }
        const jsonStr = JSON.stringify(jsonObject);
        if (jsonStr[0] != "{") {
            throw new Error(`Expected ${name} to be a JSON object, received ${jsonStr}`);
        }
        //We return the result of JSON.stringify() to use the minimal amount of space
        return jsonStr;
    };
}
export function jsonObject () : AssertDelegate<Object> {
    return (name : string, mixed : any) : Object => {
        if (typeof mixed == "string") {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, mixed);
            return JSON.parse(mixed);
        } else {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, JSON.stringify(mixed));
            return mixed;
        }
    }
}

/*
function gen (n) {
let args0 = [];
let args1 = [];
let args2 = [];
for (let i=0; i<n; ++i) {
    args0.push(`F${i} extends AssertFunc<object>`);
    args1.push(`f${i} : F${i}`);
    args2.push(`TypeOf<F${i}>`);
}
return `export function intersect<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("&")}>;`;
}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
export function intersect<F0 extends AssertFunc<object>> (f0 : F0) : AssertDelegate<TypeOf<F0>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>&TypeOf<F1>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>, F18 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>>;
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>, F18 extends AssertFunc<object>, F19 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>&TypeOf<F19>>;
export function intersect<F extends AssertFunc<object>> (...assertions : F[]) : AssertDelegate<TypeOf<F>> {
    const assertDelegates = assertions.map(toAssertDelegateExact);

    return (name : string, mixed : any) : TypeOf<F> => {
        const result : TypeOf<F>[] = [];
        for (let d of assertDelegates) {
            result.push(d(name, mixed));
        }
        return spread(...result);
    };
}
