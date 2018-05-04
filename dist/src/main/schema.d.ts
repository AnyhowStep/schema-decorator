import { Field, AssertDelegate, TypeOf } from "./types";
import { RawFieldCollection } from "./field";
export declare function schema<N0 extends string, T0>(f0: Field<N0, T0>): AssertDelegate<{
    [k in N0]: T0;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1>(f0: Field<N0, T0>, f1: Field<N1, T1>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44, N45 extends string, T45>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>, f45: Field<N45, T45>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
} & {
    [k in N45]: T45;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44, N45 extends string, T45, N46 extends string, T46>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>, f45: Field<N45, T45>, f46: Field<N46, T46>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
} & {
    [k in N45]: T45;
} & {
    [k in N46]: T46;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44, N45 extends string, T45, N46 extends string, T46, N47 extends string, T47>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>, f45: Field<N45, T45>, f46: Field<N46, T46>, f47: Field<N47, T47>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
} & {
    [k in N45]: T45;
} & {
    [k in N46]: T46;
} & {
    [k in N47]: T47;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44, N45 extends string, T45, N46 extends string, T46, N47 extends string, T47, N48 extends string, T48>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>, f45: Field<N45, T45>, f46: Field<N46, T46>, f47: Field<N47, T47>, f48: Field<N48, T48>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
} & {
    [k in N45]: T45;
} & {
    [k in N46]: T46;
} & {
    [k in N47]: T47;
} & {
    [k in N48]: T48;
}>;
export declare function schema<N0 extends string, T0, N1 extends string, T1, N2 extends string, T2, N3 extends string, T3, N4 extends string, T4, N5 extends string, T5, N6 extends string, T6, N7 extends string, T7, N8 extends string, T8, N9 extends string, T9, N10 extends string, T10, N11 extends string, T11, N12 extends string, T12, N13 extends string, T13, N14 extends string, T14, N15 extends string, T15, N16 extends string, T16, N17 extends string, T17, N18 extends string, T18, N19 extends string, T19, N20 extends string, T20, N21 extends string, T21, N22 extends string, T22, N23 extends string, T23, N24 extends string, T24, N25 extends string, T25, N26 extends string, T26, N27 extends string, T27, N28 extends string, T28, N29 extends string, T29, N30 extends string, T30, N31 extends string, T31, N32 extends string, T32, N33 extends string, T33, N34 extends string, T34, N35 extends string, T35, N36 extends string, T36, N37 extends string, T37, N38 extends string, T38, N39 extends string, T39, N40 extends string, T40, N41 extends string, T41, N42 extends string, T42, N43 extends string, T43, N44 extends string, T44, N45 extends string, T45, N46 extends string, T46, N47 extends string, T47, N48 extends string, T48, N49 extends string, T49>(f0: Field<N0, T0>, f1: Field<N1, T1>, f2: Field<N2, T2>, f3: Field<N3, T3>, f4: Field<N4, T4>, f5: Field<N5, T5>, f6: Field<N6, T6>, f7: Field<N7, T7>, f8: Field<N8, T8>, f9: Field<N9, T9>, f10: Field<N10, T10>, f11: Field<N11, T11>, f12: Field<N12, T12>, f13: Field<N13, T13>, f14: Field<N14, T14>, f15: Field<N15, T15>, f16: Field<N16, T16>, f17: Field<N17, T17>, f18: Field<N18, T18>, f19: Field<N19, T19>, f20: Field<N20, T20>, f21: Field<N21, T21>, f22: Field<N22, T22>, f23: Field<N23, T23>, f24: Field<N24, T24>, f25: Field<N25, T25>, f26: Field<N26, T26>, f27: Field<N27, T27>, f28: Field<N28, T28>, f29: Field<N29, T29>, f30: Field<N30, T30>, f31: Field<N31, T31>, f32: Field<N32, T32>, f33: Field<N33, T33>, f34: Field<N34, T34>, f35: Field<N35, T35>, f36: Field<N36, T36>, f37: Field<N37, T37>, f38: Field<N38, T38>, f39: Field<N39, T39>, f40: Field<N40, T40>, f41: Field<N41, T41>, f42: Field<N42, T42>, f43: Field<N43, T43>, f44: Field<N44, T44>, f45: Field<N45, T45>, f46: Field<N46, T46>, f47: Field<N47, T47>, f48: Field<N48, T48>, f49: Field<N49, T49>): AssertDelegate<{
    [k in N0]: T0;
} & {
    [k in N1]: T1;
} & {
    [k in N2]: T2;
} & {
    [k in N3]: T3;
} & {
    [k in N4]: T4;
} & {
    [k in N5]: T5;
} & {
    [k in N6]: T6;
} & {
    [k in N7]: T7;
} & {
    [k in N8]: T8;
} & {
    [k in N9]: T9;
} & {
    [k in N10]: T10;
} & {
    [k in N11]: T11;
} & {
    [k in N12]: T12;
} & {
    [k in N13]: T13;
} & {
    [k in N14]: T14;
} & {
    [k in N15]: T15;
} & {
    [k in N16]: T16;
} & {
    [k in N17]: T17;
} & {
    [k in N18]: T18;
} & {
    [k in N19]: T19;
} & {
    [k in N20]: T20;
} & {
    [k in N21]: T21;
} & {
    [k in N22]: T22;
} & {
    [k in N23]: T23;
} & {
    [k in N24]: T24;
} & {
    [k in N25]: T25;
} & {
    [k in N26]: T26;
} & {
    [k in N27]: T27;
} & {
    [k in N28]: T28;
} & {
    [k in N29]: T29;
} & {
    [k in N30]: T30;
} & {
    [k in N31]: T31;
} & {
    [k in N32]: T32;
} & {
    [k in N33]: T33;
} & {
    [k in N34]: T34;
} & {
    [k in N35]: T35;
} & {
    [k in N36]: T36;
} & {
    [k in N37]: T37;
} & {
    [k in N38]: T38;
} & {
    [k in N39]: T39;
} & {
    [k in N40]: T40;
} & {
    [k in N41]: T41;
} & {
    [k in N42]: T42;
} & {
    [k in N43]: T43;
} & {
    [k in N44]: T44;
} & {
    [k in N45]: T45;
} & {
    [k in N46]: T46;
} & {
    [k in N47]: T47;
} & {
    [k in N48]: T48;
} & {
    [k in N49]: T49;
}>;
export declare function schema<N extends string, T>(...fields: Field<N, T>[]): AssertDelegate<{
    [k in N]: T;
}>;
export declare function toSchema<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): AssertDelegate<{
    [name in keyof RawFieldCollectionT]: TypeOf<RawFieldCollectionT[name]>;
}>;
