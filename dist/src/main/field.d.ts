import { AssertDelegate, AssertFunc, TypeOf } from "./types";
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
export declare type RawFieldCollection = {
    [name: string]: AssertFunc<any>;
};
export declare type FieldCollection<RawFieldCollectionT extends RawFieldCollection> = {
    [name in keyof RawFieldCollectionT]: Field<name, TypeOf<RawFieldCollectionT[name]>>;
};
export declare function field<NameT extends string, TypeT>(name: NameT, assert: AssertFunc<TypeT>): Field<NameT, TypeT>;
export declare function fields<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): FieldCollection<RawFieldCollectionT>;
