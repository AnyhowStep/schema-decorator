import {
    Field,
    AssertFunc,
    TypeOf
} from "./types";

export type RawFieldCollection = { [name : string] : AssertFunc<any> };
export type FieldCollection<RawFieldCollectionT extends RawFieldCollection> = {
    [name in Exclude<keyof RawFieldCollectionT, number|symbol>] : Field<name, TypeOf<RawFieldCollectionT[name]>>
};

export function field<NameT extends string, TypeT> (
    name : NameT,
    assert : AssertFunc<TypeT>
) {
    return new Field(name, assert);
}
export function fields<RawFieldCollectionT extends RawFieldCollection> (raw : RawFieldCollectionT) : FieldCollection<RawFieldCollectionT> {
    const result : any = {};
    for (let name in raw) {
        if (!raw.hasOwnProperty(name)) {
            continue;
        }
        result[name] = field(name, raw[name]);
    }
    return result;
}
