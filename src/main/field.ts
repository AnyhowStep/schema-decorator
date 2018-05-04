import {
    toAssertDelegateExact,
    maybe,
    optional,
    nullable,
} from "./assert";
import {
    AssertDelegate,
    AssertFunc,
    TypeOf
} from "./types";

export class Field <NameT extends string, TypeT> {
    public readonly name : NameT;
    public readonly assert : AssertFunc<TypeT>;
    public readonly assertDelegate : AssertDelegate<TypeT>;
    public constructor (name : NameT, assert : AssertFunc<TypeT>) {
        this.name = name;
        this.assert = assert;
        this.assertDelegate = toAssertDelegateExact(assert);
    }

    public maybe () {
        return new Field(
            this.name,
            maybe(this.assertDelegate)
        );
    }
    public optional () {
        return new Field(
            this.name,
            optional(this.assertDelegate)
        );
    }
    public nullable () {
        return new Field(
            this.name,
            nullable(this.assertDelegate)
        );
    }
    public withName<NewNameT extends string> (name : NewNameT) {
        return new Field(
            name,
            this.assert
        );
    }
    public withAssert<NewTypeT> (assert : AssertFunc<NewTypeT>) {
        return new Field(
            this.name,
            assert
        );
    }
}

export type RawFieldCollection = { [name : string] : AssertFunc<any> };
export type FieldCollection<RawFieldCollectionT extends RawFieldCollection> = { [name in keyof RawFieldCollectionT] : Field<name, TypeOf<RawFieldCollectionT[name]>> };

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
