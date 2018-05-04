import {
    AssertFunc,
    toAssertDelegateExact,
    maybe,
    optional,
    nullable,
} from "./assert";
import {AssertDelegate} from "./AssertDelegate";

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

export function field<NameT extends string, TypeT> (
    name : NameT,
    assert : AssertFunc<TypeT>
) {
    return new Field(name, assert);
}
