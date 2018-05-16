import { Field, AnyField, AssertDelegate, TypeOf } from "./types";
import { RawFieldCollection } from "./field";
export declare type SchemaField<FieldT extends AnyField> = (FieldT extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never);
export declare function schema<F0 extends AnyField>(f0: F0): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField>(f0: F0, f1: F1): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField>(f0: F0, f1: F1, f2: F2): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F45 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F45 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F46 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F45 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F46 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F47 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField, F48 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47, f48: F48): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F45 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F46 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F47 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F48 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema<F0 extends AnyField, F1 extends AnyField, F2 extends AnyField, F3 extends AnyField, F4 extends AnyField, F5 extends AnyField, F6 extends AnyField, F7 extends AnyField, F8 extends AnyField, F9 extends AnyField, F10 extends AnyField, F11 extends AnyField, F12 extends AnyField, F13 extends AnyField, F14 extends AnyField, F15 extends AnyField, F16 extends AnyField, F17 extends AnyField, F18 extends AnyField, F19 extends AnyField, F20 extends AnyField, F21 extends AnyField, F22 extends AnyField, F23 extends AnyField, F24 extends AnyField, F25 extends AnyField, F26 extends AnyField, F27 extends AnyField, F28 extends AnyField, F29 extends AnyField, F30 extends AnyField, F31 extends AnyField, F32 extends AnyField, F33 extends AnyField, F34 extends AnyField, F35 extends AnyField, F36 extends AnyField, F37 extends AnyField, F38 extends AnyField, F39 extends AnyField, F40 extends AnyField, F41 extends AnyField, F42 extends AnyField, F43 extends AnyField, F44 extends AnyField, F45 extends AnyField, F46 extends AnyField, F47 extends AnyField, F48 extends AnyField, F49 extends AnyField>(f0: F0, f1: F1, f2: F2, f3: F3, f4: F4, f5: F5, f6: F6, f7: F7, f8: F8, f9: F9, f10: F10, f11: F11, f12: F12, f13: F13, f14: F14, f15: F15, f16: F16, f17: F17, f18: F18, f19: F19, f20: F20, f21: F21, f22: F22, f23: F23, f24: F24, f25: F25, f26: F26, f27: F27, f28: F28, f29: F29, f30: F30, f31: F31, f32: F32, f33: F33, f34: F34, f35: F35, f36: F36, f37: F37, f38: F38, f39: F39, f40: F40, f41: F41, f42: F42, f43: F43, f44: F44, f45: F45, f46: F46, f47: F47, f48: F48, f49: F49): AssertDelegate<(F0 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F1 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F2 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F3 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F4 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F5 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F6 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F7 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F8 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F9 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F10 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F11 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F12 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F13 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F14 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F15 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F16 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F17 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F18 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F19 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F20 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F21 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F22 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F23 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F24 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F25 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F26 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F27 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F28 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F29 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F30 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F31 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F32 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F33 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F34 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F35 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F36 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F37 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F38 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F39 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F40 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F41 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F42 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F43 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F44 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F45 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F46 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F47 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F48 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never) & (F49 extends Field<infer N, infer T> ? (undefined extends T ? {
    [k in N]+?: T;
} : {
    [k in N]: T;
}) : never)>;
export declare function schema(...fields: AnyField[]): AssertDelegate<any>;
export declare function toSchema<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): AssertDelegate<{
    [name in keyof RawFieldCollectionT]: TypeOf<RawFieldCollectionT[name]>;
}>;
