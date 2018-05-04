import * as convert from "./convert";
import * as validation from "@anyhowstep/data-validation";
import {
    Constructor,
    AssertDelegate,
    AssertFunc
} from "./types";
import {Assertion} from "./Assertion";
import * as myUtil from "./util";
import {spread} from "@anyhowstep/type-util";

export type CastDelegate<FromT, ToT> = (from : FromT) => ToT;

export function nested<T> (ctor : Constructor<T>) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        const result = convert.toClass(name, mixed, ctor);
        return result;
    };
}
export function nestedExact<T> (ctor : Constructor<T>) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        const result = convert.toClassExact(name, mixed, ctor);
        return result;
    };
}
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
    args0.push(`T${i}`);
    args1.push(`i${i} : AssertDelegate<T${i}>`);
    args2.push(`T${i}`);
}
return `export function or<${args0.join(", ")}> (${args1.join(", ")}) : AssertDelegate<${args2.join("|")}>;`;
}
arr = [];
for (let i=1; i<21; ++i) {
arr.push(gen(i));
}
arr.join("\n");
*/
export function or<T0> (i0 : AssertDelegate<T0>) : AssertDelegate<T0>;
export function or<T0, T1> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>) : AssertDelegate<T0|T1>;
export function or<T0, T1, T2> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>) : AssertDelegate<T0|T1|T2>;
export function or<T0, T1, T2, T3> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>) : AssertDelegate<T0|T1|T2|T3>;
export function or<T0, T1, T2, T3, T4> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>) : AssertDelegate<T0|T1|T2|T3|T4>;
export function or<T0, T1, T2, T3, T4, T5> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>) : AssertDelegate<T0|T1|T2|T3|T4|T5>;
export function or<T0, T1, T2, T3, T4, T5, T6> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15|T16>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15|T16|T17>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>, i18 : AssertDelegate<T18>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15|T16|T17|T18>;
export function or<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>, i18 : AssertDelegate<T18>, i19 : AssertDelegate<T19>) : AssertDelegate<T0|T1|T2|T3|T4|T5|T6|T7|T8|T9|T10|T11|T12|T13|T14|T15|T16|T17|T18|T19>;
export function or<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T>;
export function or<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        let messages : string[] = [];
        for (let d of arr) {
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
		args1.push(`i${i} : AssertDelegate<T${i}>`);
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
export function and<T0> (i0 : AssertDelegate<T0>) : AssertDelegate<T0>;
export function and<T0, T1> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>) : AssertDelegate<T0&T1>;
export function and<T0, T1, T2> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>) : AssertDelegate<T0&T1&T2>;
export function and<T0, T1, T2, T3> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>) : AssertDelegate<T0&T1&T2&T3>;
export function and<T0, T1, T2, T3, T4> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>) : AssertDelegate<T0&T1&T2&T3&T4>;
export function and<T0, T1, T2, T3, T4, T5> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>) : AssertDelegate<T0&T1&T2&T3&T4&T5>;
export function and<T0, T1, T2, T3, T4, T5, T6> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>, i18 : AssertDelegate<T18>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17&T18>;
export function and<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (i0 : AssertDelegate<T0>, i1 : AssertDelegate<T1>, i2 : AssertDelegate<T2>, i3 : AssertDelegate<T3>, i4 : AssertDelegate<T4>, i5 : AssertDelegate<T5>, i6 : AssertDelegate<T6>, i7 : AssertDelegate<T7>, i8 : AssertDelegate<T8>, i9 : AssertDelegate<T9>, i10 : AssertDelegate<T10>, i11 : AssertDelegate<T11>, i12 : AssertDelegate<T12>, i13 : AssertDelegate<T13>, i14 : AssertDelegate<T14>, i15 : AssertDelegate<T15>, i16 : AssertDelegate<T16>, i17 : AssertDelegate<T17>, i18 : AssertDelegate<T18>, i19 : AssertDelegate<T19>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17&T18&T19>;
export function and<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T>;
export function and<T> (...arr : AssertDelegate<T>[]) : AssertDelegate<T> {
    return (name : string, mixed : any) : T => {
        for (let d of arr) {
            mixed = d(name, mixed);
        }
        return mixed;
    };
}
export function cast<FromT, ToT> (canCastDelegate : AssertDelegate<FromT>, castDelegate : CastDelegate<FromT, ToT>, assertDelegate : AssertDelegate<ToT>) : AssertDelegate<ToT> {
    return (name : string, mixed : any) : ToT => {
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
export function castFirst<FromT, ToT> (canCastDelegate : AssertDelegate<FromT>, castDelegate : CastDelegate<FromT, ToT>, assertDelegate : AssertDelegate<ToT>) : AssertDelegate<ToT> {
    return (name : string, mixed : any) : ToT => {
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
export function assert<T> (assertDelegate : AssertDelegate<T>) {
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
                        throw new Error(`Expected ${propertyKey} to be an accessor and have a "set()" method`);
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
export function optional<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|undefined> {
    return or(
        oneOf(undefined),
        assertDelegate
    );
}
export function nullable<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|null> {
    return or(
        oneOf(null),
        assertDelegate
    );
}
export function maybe<T> (assertDelegate : AssertDelegate<T>) : AssertDelegate<T|undefined|null> {
    return or<T|undefined|null>(
        oneOf(undefined, null),
        assertDelegate
    );
}

//Array
export function array<T> (assertDelegate : AssertDelegate<T>) {
    return (name : string, mixed : any) : T[] => {
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

export function isCtor<T> (assertFunc : AssertFunc<T>) : assertFunc is Constructor<T> {
    return assertFunc.length == 0;
}
export function toAssertDelegate<T> (assertFunc : AssertFunc<T>) : AssertDelegate<T> {
    if (isCtor(assertFunc)) {
        return nested(assertFunc);
    } else {
        return assertFunc;
    }
}
export function toAssertDelegateExact<T> (assertFunc : AssertFunc<T>) : AssertDelegate<T> {
    if (isCtor(assertFunc)) {
        return nestedExact(assertFunc);
    } else {
        return assertFunc;
    }
}

export function intersect<T0 extends object> (i0 : AssertFunc<T0>) : AssertDelegate<T0>;
export function intersect<T0 extends object, T1 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>) : AssertDelegate<T0&T1>;
export function intersect<T0 extends object, T1 extends object, T2 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>) : AssertDelegate<T0&T1&T2>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>) : AssertDelegate<T0&T1&T2&T3>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>) : AssertDelegate<T0&T1&T2&T3&T4>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>) : AssertDelegate<T0&T1&T2&T3&T4&T5>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object, T15 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>, i15 : AssertFunc<T15>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object, T15 extends object, T16 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>, i15 : AssertFunc<T15>, i16 : AssertFunc<T16>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object, T15 extends object, T16 extends object, T17 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>, i15 : AssertFunc<T15>, i16 : AssertFunc<T16>, i17 : AssertFunc<T17>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object, T15 extends object, T16 extends object, T17 extends object, T18 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>, i15 : AssertFunc<T15>, i16 : AssertFunc<T16>, i17 : AssertFunc<T17>, i18 : AssertFunc<T18>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17&T18>;
export function intersect<T0 extends object, T1 extends object, T2 extends object, T3 extends object, T4 extends object, T5 extends object, T6 extends object, T7 extends object, T8 extends object, T9 extends object, T10 extends object, T11 extends object, T12 extends object, T13 extends object, T14 extends object, T15 extends object, T16 extends object, T17 extends object, T18 extends object, T19 extends object> (i0 : AssertFunc<T0>, i1 : AssertFunc<T1>, i2 : AssertFunc<T2>, i3 : AssertFunc<T3>, i4 : AssertFunc<T4>, i5 : AssertFunc<T5>, i6 : AssertFunc<T6>, i7 : AssertFunc<T7>, i8 : AssertFunc<T8>, i9 : AssertFunc<T9>, i10 : AssertFunc<T10>, i11 : AssertFunc<T11>, i12 : AssertFunc<T12>, i13 : AssertFunc<T13>, i14 : AssertFunc<T14>, i15 : AssertFunc<T15>, i16 : AssertFunc<T16>, i17 : AssertFunc<T17>, i18 : AssertFunc<T18>, i19 : AssertFunc<T19>) : AssertDelegate<T0&T1&T2&T3&T4&T5&T6&T7&T8&T9&T10&T11&T12&T13&T14&T15&T16&T17&T18&T19>;
export function intersect<T extends object> (...assertions : AssertFunc<T>[]) : AssertDelegate<T> {
    const assertDelegates = assertions.map(toAssertDelegateExact);

    return (name : string, mixed : any) : T => {
        const result : T[] = [];
        for (let d of assertDelegates) {
            result.push(d(name, mixed));
        }
        return spread(...result);
    };
}
