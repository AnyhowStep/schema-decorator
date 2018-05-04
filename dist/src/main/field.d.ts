import { AssertFunc } from "./assert";
import { AssertDelegate } from "./AssertDelegate";
export declare class Field<NameT extends string, TypeT> {
    readonly name: NameT;
    readonly assert: AssertFunc<TypeT>;
    readonly assertDelegate: AssertDelegate<TypeT>;
    constructor(name: NameT, assert: AssertFunc<TypeT>);
    maybe(): Field<NameT, TypeT | null | undefined>;
    optional(): Field<NameT, TypeT | undefined>;
    nullable(): Field<NameT, TypeT | null>;
    withName<NewNameT extends string>(name: NewNameT): Field<NewNameT, TypeT>;
    withAssert<NewTypeT>(assert: AssertFunc<NewTypeT>): Field<NameT, NewTypeT>;
}
export declare function field<NameT extends string, TypeT>(name: NameT, assert: AssertFunc<TypeT>): Field<NameT, TypeT>;
