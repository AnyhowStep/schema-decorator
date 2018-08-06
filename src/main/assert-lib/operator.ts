import {
    AnyAssertFunc,
    ChainedAssertFunc,
    AssertDelegate,
    TypeOf,
    AcceptsOf,
    toAssertDelegateExact,
    AssertFunc,
    Chainable,
    UnsafeTypeOf,
    UnsafeAcceptsOf
} from "../types";
import {deepEqual} from "../deep-equal";
import {deepMerge} from "../deep-merge";
import {isLiteralOrDate} from "../is-literal-or-date";

/*
function gen (n) {
let args0 = [];
let args1 = [];
let args2 = [];
let args3 = [];
for (let i=0; i<n; ++i) {
    args0.push(`F${i} extends AnyAssertFunc`);
    args1.push(`f${i} : F${i}`);
    args2.push(`TypeOf<F${i}>`);
    args3.push(`AcceptsOf<F${i}>`);
}
return `export function or<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("|")}> & { __accepts : ${args3.join("|")} };`;
}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
export function or<F0 extends AnyAssertFunc> (f0 : F0) : AssertDelegate<TypeOf<F0>> & { __accepts : AcceptsOf<F0> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>|TypeOf<F1>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14>|AcceptsOf<F15> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14>|AcceptsOf<F15>|AcceptsOf<F16> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14>|AcceptsOf<F15>|AcceptsOf<F16>|AcceptsOf<F17> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>|TypeOf<F18>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14>|AcceptsOf<F15>|AcceptsOf<F16>|AcceptsOf<F17>|AcceptsOf<F18> };
export function or<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc, F19 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>|TypeOf<F1>|TypeOf<F2>|TypeOf<F3>|TypeOf<F4>|TypeOf<F5>|TypeOf<F6>|TypeOf<F7>|TypeOf<F8>|TypeOf<F9>|TypeOf<F10>|TypeOf<F11>|TypeOf<F12>|TypeOf<F13>|TypeOf<F14>|TypeOf<F15>|TypeOf<F16>|TypeOf<F17>|TypeOf<F18>|TypeOf<F19>> & { __accepts : AcceptsOf<F0>|AcceptsOf<F1>|AcceptsOf<F2>|AcceptsOf<F3>|AcceptsOf<F4>|AcceptsOf<F5>|AcceptsOf<F6>|AcceptsOf<F7>|AcceptsOf<F8>|AcceptsOf<F9>|AcceptsOf<F10>|AcceptsOf<F11>|AcceptsOf<F12>|AcceptsOf<F13>|AcceptsOf<F14>|AcceptsOf<F15>|AcceptsOf<F16>|AcceptsOf<F17>|AcceptsOf<F18>|AcceptsOf<F19> };
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
        throw new Error(`${name} is invalid.\n${messages.join(" or \n")}`);
    };
}
/*
function gen (n) {
let args0 = [];
let args1 = [];
let args2 = [];
let args3 = [];
for (let i=0; i<n; ++i) {
    if (i == 0) {
        args0.push(`F${i} extends AnyAssertFunc`);
    } else {
        args0.push(`F${i} extends ChainedAssertFunc<TypeOf<F${i-1}>>`);
    }
    args1.push(`f${i} : F${i}`);
    args2.push(`TypeOf<F${i}>`);
    if (i > 0) {
        args3.push(`Chainable<F${i-1}, F${i}>`)
    }
}
if (n == 1) {
return `export function chain<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<TypeOf<F${n-1}>> & { __accepts : AcceptsOf<F0> };`;
} else {
return `export function chain<${args0.join(", ")}> (${args1.join(", ")}) : (
    ${args3.join(" &\n\t")}
) extends true ?
    AssertDelegate<TypeOf<F${n-1}>> & { __accepts : AcceptsOf<F0> } :
    never;`;
}

}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
//Accepts is only `AcceptsOf<F0>` no matter how many arguments
//because the result of the first assertion is passed to the subsequent assertions
export function chain<F0 extends AnyAssertFunc> (f0 : F0) : AssertDelegate<TypeOf<F0>> & { __accepts : AcceptsOf<F0> };
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>> (f0 : F0, f1 : F1) : (
    Chainable<F0, F1>
) extends true ?
    AssertDelegate<TypeOf<F1>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>> (f0 : F0, f1 : F1, f2 : F2) : (
    Chainable<F0, F1> &
    Chainable<F1, F2>
) extends true ?
    AssertDelegate<TypeOf<F2>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3>
) extends true ?
    AssertDelegate<TypeOf<F3>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4>
) extends true ?
    AssertDelegate<TypeOf<F4>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5>
) extends true ?
    AssertDelegate<TypeOf<F5>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6>
) extends true ?
    AssertDelegate<TypeOf<F6>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7>
) extends true ?
    AssertDelegate<TypeOf<F7>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8>
) extends true ?
    AssertDelegate<TypeOf<F8>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9>
) extends true ?
    AssertDelegate<TypeOf<F9>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10>
) extends true ?
    AssertDelegate<TypeOf<F10>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11>
) extends true ?
    AssertDelegate<TypeOf<F11>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12>
) extends true ?
    AssertDelegate<TypeOf<F12>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13>
) extends true ?
    AssertDelegate<TypeOf<F13>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14>
) extends true ?
    AssertDelegate<TypeOf<F14>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>, F15 extends ChainedAssertFunc<TypeOf<F14>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14> &
    Chainable<F14, F15>
) extends true ?
    AssertDelegate<TypeOf<F15>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>, F15 extends ChainedAssertFunc<TypeOf<F14>>, F16 extends ChainedAssertFunc<TypeOf<F15>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14> &
    Chainable<F14, F15> &
    Chainable<F15, F16>
) extends true ?
    AssertDelegate<TypeOf<F16>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>, F15 extends ChainedAssertFunc<TypeOf<F14>>, F16 extends ChainedAssertFunc<TypeOf<F15>>, F17 extends ChainedAssertFunc<TypeOf<F16>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14> &
    Chainable<F14, F15> &
    Chainable<F15, F16> &
    Chainable<F16, F17>
) extends true ?
    AssertDelegate<TypeOf<F17>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>, F15 extends ChainedAssertFunc<TypeOf<F14>>, F16 extends ChainedAssertFunc<TypeOf<F15>>, F17 extends ChainedAssertFunc<TypeOf<F16>>, F18 extends ChainedAssertFunc<TypeOf<F17>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14> &
    Chainable<F14, F15> &
    Chainable<F15, F16> &
    Chainable<F16, F17> &
    Chainable<F17, F18>
) extends true ?
    AssertDelegate<TypeOf<F18>> & { __accepts : AcceptsOf<F0> } :
    never;
export function chain<F0 extends AnyAssertFunc, F1 extends ChainedAssertFunc<TypeOf<F0>>, F2 extends ChainedAssertFunc<TypeOf<F1>>, F3 extends ChainedAssertFunc<TypeOf<F2>>, F4 extends ChainedAssertFunc<TypeOf<F3>>, F5 extends ChainedAssertFunc<TypeOf<F4>>, F6 extends ChainedAssertFunc<TypeOf<F5>>, F7 extends ChainedAssertFunc<TypeOf<F6>>, F8 extends ChainedAssertFunc<TypeOf<F7>>, F9 extends ChainedAssertFunc<TypeOf<F8>>, F10 extends ChainedAssertFunc<TypeOf<F9>>, F11 extends ChainedAssertFunc<TypeOf<F10>>, F12 extends ChainedAssertFunc<TypeOf<F11>>, F13 extends ChainedAssertFunc<TypeOf<F12>>, F14 extends ChainedAssertFunc<TypeOf<F13>>, F15 extends ChainedAssertFunc<TypeOf<F14>>, F16 extends ChainedAssertFunc<TypeOf<F15>>, F17 extends ChainedAssertFunc<TypeOf<F16>>, F18 extends ChainedAssertFunc<TypeOf<F17>>, F19 extends ChainedAssertFunc<TypeOf<F18>>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : (
    Chainable<F0, F1> &
    Chainable<F1, F2> &
    Chainable<F2, F3> &
    Chainable<F3, F4> &
    Chainable<F4, F5> &
    Chainable<F5, F6> &
    Chainable<F6, F7> &
    Chainable<F7, F8> &
    Chainable<F8, F9> &
    Chainable<F9, F10> &
    Chainable<F10, F11> &
    Chainable<F11, F12> &
    Chainable<F12, F13> &
    Chainable<F13, F14> &
    Chainable<F14, F15> &
    Chainable<F15, F16> &
    Chainable<F16, F17> &
    Chainable<F17, F18> &
    Chainable<F18, F19>
) extends true ?
    AssertDelegate<TypeOf<F19>> & { __accepts : AcceptsOf<F0> } :
    never;
//Not the best...
export function chain<Arr extends AnyAssertFunc[]> (...arr : Arr) : (
    AssertDelegate<unknown>
);
export function chain<Arr extends AnyAssertFunc[]> (...arr : Arr) : AssertDelegate<unknown> {
    const assertDelegates = arr.map(toAssertDelegateExact);
    return (name : string, mixed : unknown) : unknown => {
        for (let d of assertDelegates) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
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

export type ObjectTypeAt<Arr extends AssertFunc<object>[], IndexT extends string> = (
    IndexT extends keyof Arr ?
        (
            Arr[IndexT] extends AssertFunc<any> ?
                UnsafeTypeOf<Arr[IndexT]> :
                {}
        ) :
        {}
);
export type ObjectAcceptsAt<Arr extends AssertFunc<object>[], IndexT extends string> = (
    IndexT extends keyof Arr ?
        (
            Arr[IndexT] extends AssertFunc<any> ?
                UnsafeAcceptsOf<Arr[IndexT]> :
                {}
        ) :
        {}
);
/*
function gen (n) {
let args0 = [];
for (let i=0; i<n; ++i) {
    args0.push(`ObjectTypeAt<Arr, "${i}">`);
}
return args0.join(" &\n\t").replace(/\t/g, "    ");
}
gen(20)
*/
export type IntersectionType<Arr extends AssertFunc<object>[]> = (
    ObjectTypeAt<Arr, "0"> &
    ObjectTypeAt<Arr, "1"> &
    ObjectTypeAt<Arr, "2"> &
    ObjectTypeAt<Arr, "3"> &
    ObjectTypeAt<Arr, "4"> &
    ObjectTypeAt<Arr, "5"> &
    ObjectTypeAt<Arr, "6"> &
    ObjectTypeAt<Arr, "7"> &
    ObjectTypeAt<Arr, "8"> &
    ObjectTypeAt<Arr, "9"> &
    ObjectTypeAt<Arr, "10"> &
    ObjectTypeAt<Arr, "11"> &
    ObjectTypeAt<Arr, "12"> &
    ObjectTypeAt<Arr, "13"> &
    ObjectTypeAt<Arr, "14"> &
    ObjectTypeAt<Arr, "15"> &
    ObjectTypeAt<Arr, "16"> &
    ObjectTypeAt<Arr, "17"> &
    ObjectTypeAt<Arr, "18"> &
    ObjectTypeAt<Arr, "19">
);
/*
function gen (n) {
let args0 = [];
for (let i=0; i<n; ++i) {
    args0.push(`ObjectAcceptsAt<Arr, "${i}">`);
}
return args0.join(" &\n\t").replace(/\t/g, "    ");
}
gen(20)
*/
export type IntersectionAccepts<Arr extends AssertFunc<object>[]> = (
    ObjectAcceptsAt<Arr, "0"> &
    ObjectAcceptsAt<Arr, "1"> &
    ObjectAcceptsAt<Arr, "2"> &
    ObjectAcceptsAt<Arr, "3"> &
    ObjectAcceptsAt<Arr, "4"> &
    ObjectAcceptsAt<Arr, "5"> &
    ObjectAcceptsAt<Arr, "6"> &
    ObjectAcceptsAt<Arr, "7"> &
    ObjectAcceptsAt<Arr, "8"> &
    ObjectAcceptsAt<Arr, "9"> &
    ObjectAcceptsAt<Arr, "10"> &
    ObjectAcceptsAt<Arr, "11"> &
    ObjectAcceptsAt<Arr, "12"> &
    ObjectAcceptsAt<Arr, "13"> &
    ObjectAcceptsAt<Arr, "14"> &
    ObjectAcceptsAt<Arr, "15"> &
    ObjectAcceptsAt<Arr, "16"> &
    ObjectAcceptsAt<Arr, "17"> &
    ObjectAcceptsAt<Arr, "18"> &
    ObjectAcceptsAt<Arr, "19">
);
export function intersect<Arr extends AssertFunc<object>[]> (
    ...assertions : Arr
) : (
    AssertDelegate<{
        [k in keyof IntersectionType<Arr>] : IntersectionType<Arr>[k]
    }> &
    {
        __accepts : (
            IntersectionAccepts<Arr>
        )
    }
);

/*
== Old style ==
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
/*export function intersect<F0 extends AssertFunc<object>> (f0 : F0) : AssertDelegate<TypeOf<F0>> & { __accepts : AcceptsOf<F0> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>&TypeOf<F1>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>, F18 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17>&AcceptsOf<F18> };
export function intersect<F0 extends AssertFunc<object>, F1 extends AssertFunc<object>, F2 extends AssertFunc<object>, F3 extends AssertFunc<object>, F4 extends AssertFunc<object>, F5 extends AssertFunc<object>, F6 extends AssertFunc<object>, F7 extends AssertFunc<object>, F8 extends AssertFunc<object>, F9 extends AssertFunc<object>, F10 extends AssertFunc<object>, F11 extends AssertFunc<object>, F12 extends AssertFunc<object>, F13 extends AssertFunc<object>, F14 extends AssertFunc<object>, F15 extends AssertFunc<object>, F16 extends AssertFunc<object>, F17 extends AssertFunc<object>, F18 extends AssertFunc<object>, F19 extends AssertFunc<object>> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>&TypeOf<F19>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17>&AcceptsOf<F18>&AcceptsOf<F19> };*/
export function intersect<F extends AssertFunc<object>> (...assertions : F[]) : AssertDelegate<TypeOf<F>> {
    const assertDelegates = assertions.map(toAssertDelegateExact);

    return (name : string, mixed : any) : TypeOf<F> => {
        const result : TypeOf<F>[] = [];
        for (let d of assertDelegates) {
            result.push(d(name, mixed));
        }
        return deepMerge(...result);
    };
}

/*
function gen (n) {
let args0 = [];
let args1 = [];
let args2 = [];
let args3 = [];
for (let i=0; i<n; ++i) {
    args0.push(`F${i} extends AnyAssertFunc`);
    args1.push(`f${i} : F${i}`);
    args2.push(`TypeOf<F${i}>`);
    args3.push(`AcceptsOf<F${i}>`);
}
return `export function and<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("&")}> & { __accepts : ${args3.join("&")} };`;
}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
//Strictly speaking, a better version of intersect()
export function and<F0 extends AnyAssertFunc> (f0 : F0) : AssertDelegate<TypeOf<F0>> & { __accepts : AcceptsOf<F0> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc> (f0 : F0, f1 : F1) : AssertDelegate<TypeOf<F0>&TypeOf<F1>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17>&AcceptsOf<F18> };
export function and<F0 extends AnyAssertFunc, F1 extends AnyAssertFunc, F2 extends AnyAssertFunc, F3 extends AnyAssertFunc, F4 extends AnyAssertFunc, F5 extends AnyAssertFunc, F6 extends AnyAssertFunc, F7 extends AnyAssertFunc, F8 extends AnyAssertFunc, F9 extends AnyAssertFunc, F10 extends AnyAssertFunc, F11 extends AnyAssertFunc, F12 extends AnyAssertFunc, F13 extends AnyAssertFunc, F14 extends AnyAssertFunc, F15 extends AnyAssertFunc, F16 extends AnyAssertFunc, F17 extends AnyAssertFunc, F18 extends AnyAssertFunc, F19 extends AnyAssertFunc> (f0 : F0, f1 : F1, f2 : F2, f3 : F3, f4 : F4, f5 : F5, f6 : F6, f7 : F7, f8 : F8, f9 : F9, f10 : F10, f11 : F11, f12 : F12, f13 : F13, f14 : F14, f15 : F15, f16 : F16, f17 : F17, f18 : F18, f19 : F19) : AssertDelegate<TypeOf<F0>&TypeOf<F1>&TypeOf<F2>&TypeOf<F3>&TypeOf<F4>&TypeOf<F5>&TypeOf<F6>&TypeOf<F7>&TypeOf<F8>&TypeOf<F9>&TypeOf<F10>&TypeOf<F11>&TypeOf<F12>&TypeOf<F13>&TypeOf<F14>&TypeOf<F15>&TypeOf<F16>&TypeOf<F17>&TypeOf<F18>&TypeOf<F19>> & { __accepts : AcceptsOf<F0>&AcceptsOf<F1>&AcceptsOf<F2>&AcceptsOf<F3>&AcceptsOf<F4>&AcceptsOf<F5>&AcceptsOf<F6>&AcceptsOf<F7>&AcceptsOf<F8>&AcceptsOf<F9>&AcceptsOf<F10>&AcceptsOf<F11>&AcceptsOf<F12>&AcceptsOf<F13>&AcceptsOf<F14>&AcceptsOf<F15>&AcceptsOf<F16>&AcceptsOf<F17>&AcceptsOf<F18>&AcceptsOf<F19> };
export function and<Arr extends AnyAssertFunc[]> (...arr : Arr) : AssertDelegate<unknown>;
export function and<Arr extends AnyAssertFunc[]> (...arr : Arr) : AssertDelegate<unknown> {
    const assertDelegates = arr.map(toAssertDelegateExact);
    return (name : string, mixed : unknown) : unknown => {
        const values : unknown[] = [];
        for (let d of assertDelegates) {
            values.push(d(name, mixed));
        }

        if (values.length == 0) {
            return mixed;
        }

        const first = values[0];
        if (isLiteralOrDate(first)) {
            for (let i=1; i<values.length; ++i) {
                const v = values[i];
                if (!deepEqual(first, v)) {
                    throw new Error(`${name} fails check ${i}; received ${mixed}, expected to match ${first}, found ${v}`);
                }
            }
            return first;
        }

        for (let i=0; i<values.length; ++i) {
            const v = values[i];
            if (!(v instanceof Object) || (v instanceof Date)) {
                throw new Error(`${name} fails check ${i}; received ${mixed}, expected to be an object, found ${v}`);
            }
        }
        return deepMerge(...(values as any[]));
    };
}