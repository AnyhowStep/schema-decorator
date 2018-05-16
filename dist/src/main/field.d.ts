import { Field, AssertFunc, TypeOf } from "./types";
export declare type RawFieldCollection = {
    [name: string]: AssertFunc<any>;
};
export declare type FieldCollection<RawFieldCollectionT extends RawFieldCollection> = {
    [name in Extract<keyof RawFieldCollectionT, string>]: Field<name, TypeOf<RawFieldCollectionT[name]>>;
};
export declare function field<NameT extends string, TypeT>(name: NameT, assert: AssertFunc<TypeT>): Field<NameT, TypeT>;
export declare function fields<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): FieldCollection<RawFieldCollectionT>;
