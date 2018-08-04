import { AnyField, AssertDelegate, TypeOf, AcceptsOf } from "./types";
import { RawFieldCollection } from "./field";
declare type OptionalTypeNames<Arr extends AnyField[]> = (Extract<{
    [index in Exclude<keyof Arr, keyof any[]>]: (Arr[index] extends AnyField ? (undefined extends TypeOf<Arr[index]> ? Arr[index]["name"] : never) : never);
}[Exclude<keyof Arr, keyof any[]>], string>);
declare type RequiredTypeNames<Arr extends AnyField[]> = (Extract<{
    [index in Exclude<keyof Arr, keyof any[]>]: (Arr[index] extends AnyField ? (undefined extends TypeOf<Arr[index]> ? never : Arr[index]["name"]) : never);
}[Exclude<keyof Arr, keyof any[]>], string>);
declare type OptionalAcceptsNames<Arr extends AnyField[]> = (Extract<{
    [index in Exclude<keyof Arr, keyof any[]>]: (Arr[index] extends AnyField ? (undefined extends AcceptsOf<Arr[index]> ? Arr[index]["name"] : never) : never);
}[Exclude<keyof Arr, keyof any[]>], string>);
declare type RequiredAcceptsNames<Arr extends AnyField[]> = (Extract<{
    [index in Exclude<keyof Arr, keyof any[]>]: (Arr[index] extends AnyField ? (undefined extends AcceptsOf<Arr[index]> ? never : Arr[index]["name"]) : never);
}[Exclude<keyof Arr, keyof any[]>], string>);
declare type FieldWithName<Arr extends AnyField[], NameT extends string> = ({
    [index in Exclude<keyof Arr, keyof any[]>]: (Arr[index] extends AnyField ? (Arr[index]["name"] extends NameT ? Arr[index] : never) : never);
}[Exclude<keyof Arr, keyof any[]>]);
declare type SchemaType<Arr extends AnyField[]> = ({
    [requiredName in RequiredTypeNames<Arr>]: (TypeOf<FieldWithName<Arr, requiredName>>);
} & {
    [optionalName in OptionalTypeNames<Arr>]?: (TypeOf<FieldWithName<Arr, optionalName>>);
});
declare type SchemaAccepts<Arr extends AnyField[]> = ({
    [requiredName in RequiredAcceptsNames<Arr>]: (TypeOf<FieldWithName<Arr, requiredName>>);
} & {
    [optionalName in OptionalAcceptsNames<Arr>]?: (TypeOf<FieldWithName<Arr, optionalName>>);
});
export declare function schema<Arr extends AnyField[]>(...fields: Arr): (AssertDelegate<{
    [name in keyof SchemaType<Arr>]: (SchemaType<Arr>[name]);
}> & {
    __accepts: ({
        [name in keyof SchemaAccepts<Arr>]: (SchemaAccepts<Arr>[name]);
    });
});
declare type ToSchemaType<RawFieldCollectionT extends RawFieldCollection> = ({
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends TypeOf<RawFieldCollectionT[k]> ? never : k);
    }[keyof RawFieldCollectionT]]: TypeOf<RawFieldCollectionT[name]>;
} & {
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends TypeOf<RawFieldCollectionT[k]> ? k : never);
    }[keyof RawFieldCollectionT]]?: TypeOf<RawFieldCollectionT[name]>;
});
declare type ToSchemaAccepts<RawFieldCollectionT extends RawFieldCollection> = ({
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends AcceptsOf<RawFieldCollectionT[k]> ? never : k);
    }[keyof RawFieldCollectionT]]: AcceptsOf<RawFieldCollectionT[name]>;
} & {
    [name in {
        [k in keyof RawFieldCollectionT]: (undefined extends AcceptsOf<RawFieldCollectionT[k]> ? k : never);
    }[keyof RawFieldCollectionT]]?: AcceptsOf<RawFieldCollectionT[name]>;
});
export declare function toSchema<RawFieldCollectionT extends RawFieldCollection>(raw: RawFieldCollectionT): (AssertDelegate<{
    [name in keyof ToSchemaType<RawFieldCollectionT>]: (TypeOf<RawFieldCollectionT[name]>);
}> & {
    __accepts: ({
        [name in keyof ToSchemaAccepts<RawFieldCollectionT>]: (AcceptsOf<RawFieldCollectionT[name]>);
    });
});
export {};
