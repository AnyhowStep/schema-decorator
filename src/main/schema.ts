import {Field, AnyField, AssertDelegate, TypeOf, AcceptsOf} from "./types";
import {RawFieldCollection, fields} from "./field";

/*
This is necessary for the type inference to work correctly with deeper schema nesting, unfortunately...

function schemaField (i) {
return `(undefined extends TypeOf<F${i}> ?
    { [k in F${i}["name"]]+? : TypeOf<F${i}> } :
    { [k in F${i}["name"]] : TypeOf<F${i}> })`.replace(/\s{2,}/g, "")
}
function acceptsField (i) {
return `(undefined extends AcceptsOf<F${i}> ?
    { [k in F${i}["name"]]+? : AcceptsOf<F${i}> } :
    { [k in F${i}["name"]] : AcceptsOf<F${i}> })`.replace(/\s{2,}/g, "")
}
function genSchema (max) {
    function gen (n) {
        let args0 = [];
        let args1 = [];
        let args2 = [];
        let args3 = [];
        for (let i=0; i<n; ++i) {
            args0.push(`F${i} extends AnyField`);
            args1.push(`f${i} : F${i}`);
            args2.push(schemaField(i));
            args3.push(acceptsField(i));
        }
        return `export function schema<${args0.join(", ")}> (${args1.join(", ")}) : (
    AssertDelegate<${args2.join("&")}> &
	{
		__accepts : (
			${args3.join(" &\n\t\t\t")}
		)
	}
);`;
    }
    arr = [];
    for (let i=1; i<=max; ++i) {
        arr.push(gen(i));
    }
    return arr.join("\n").replace(/\t/g, "    ");
}
genSchema(50)
*/

type OptionalTypeNames<Arr extends AnyField[]> = (
    Extract<
        {
            [index in Exclude<keyof Arr, keyof any[]>] : (
                Arr[index] extends AnyField ?
                    (
                        undefined extends TypeOf<Arr[index]> ?
                            Arr[index]["name"] :
                            never
                    ) :
                    never
            )
        }[Exclude<keyof Arr, keyof any[]>],
        string
    >
);
type RequiredTypeNames<Arr extends AnyField[]> = (
    Extract<
        {
            [index in Exclude<keyof Arr, keyof any[]>] : (
                Arr[index] extends AnyField ?
                    (
                        undefined extends TypeOf<Arr[index]> ?
                            never :
                            Arr[index]["name"]
                    ) :
                    never
            )
        }[Exclude<keyof Arr, keyof any[]>],
        string
    >
);
type OptionalAcceptsNames<Arr extends AnyField[]> = (
    Extract<
        {
            [index in Exclude<keyof Arr, keyof any[]>] : (
                Arr[index] extends AnyField ?
                    (
                        undefined extends AcceptsOf<Arr[index]> ?
                            Arr[index]["name"] :
                            never
                    ) :
                    never
            )
        }[Exclude<keyof Arr, keyof any[]>],
        string
    >
);
type RequiredAcceptsNames<Arr extends AnyField[]> = (
    Extract<
        {
            [index in Exclude<keyof Arr, keyof any[]>] : (
                Arr[index] extends AnyField ?
                    (
                        undefined extends AcceptsOf<Arr[index]> ?
                            never :
                            Arr[index]["name"]
                    ) :
                    never
            )
        }[Exclude<keyof Arr, keyof any[]>],
        string
    >
);
type FieldWithName<Arr extends AnyField[], NameT extends string> = (
    {
        [index in Exclude<keyof Arr, keyof any[]>] : (
            Arr[index] extends AnyField ?
                (
                    Arr[index]["name"] extends NameT ?
                        Arr[index] :
                        never
                ) :
                never
        )
    }[Exclude<keyof Arr, keyof any[]>]
);
type SchemaType<Arr extends AnyField[]> = (
    {
        [requiredName in RequiredTypeNames<Arr>] : (
            TypeOf<FieldWithName<Arr, requiredName>>
        )
    } &
    {
        [optionalName in OptionalTypeNames<Arr>]? : (
            TypeOf<FieldWithName<Arr, optionalName>>
        )
    }
);
type SchemaAccepts<Arr extends AnyField[]> = (
    {
        [requiredName in RequiredAcceptsNames<Arr>] : (
            TypeOf<FieldWithName<Arr, requiredName>>
        )
    } &
    {
        [optionalName in OptionalAcceptsNames<Arr>]? : (
            TypeOf<FieldWithName<Arr, optionalName>>
        )
    }
);

export function schema<Arr extends AnyField[]> (...fields : Arr) : (
    AssertDelegate<
        {
            [name in keyof SchemaType<Arr>] : (
                SchemaType<Arr>[name]
            )
        }
    > &
    {
        __accepts : (
            {
                [name in keyof SchemaAccepts<Arr>] : (
                    SchemaAccepts<Arr>[name]
                )
            }
        )
    }
) {
    const d = (name : string, mixed : any) : any => {
        if (!(mixed instanceof Object)) {
            throw new Error(`Expected ${name} to be an object; received ${typeof mixed}(${mixed})`);
        }
        const result : any = {};
        for (let f of fields) {
            result[f.name] = f.assertDelegate(`${name}.${f.name}`, mixed[f.name]);
        }
        return result;
    };
    return d as any;
}

type ToSchemaType<RawFieldCollectionT extends RawFieldCollection> = (
    {
        [name in {
            [k in keyof RawFieldCollectionT] : (
                undefined extends TypeOf<RawFieldCollectionT[k]> ?
                    never :
                    k
            )
        }[keyof RawFieldCollectionT]]: TypeOf<RawFieldCollectionT[name]>;
    } &
    {
        [name in {
            [k in keyof RawFieldCollectionT] : (
                undefined extends TypeOf<RawFieldCollectionT[k]> ?
                    k :
                    never
            )
        }[keyof RawFieldCollectionT]]?: TypeOf<RawFieldCollectionT[name]>;
    }
);

type ToSchemaAccepts<RawFieldCollectionT extends RawFieldCollection> = (
    {
        [name in {
            [k in keyof RawFieldCollectionT] : (
                undefined extends AcceptsOf<RawFieldCollectionT[k]> ?
                    never :
                    k
            )
        }[keyof RawFieldCollectionT]]: AcceptsOf<RawFieldCollectionT[name]>;
    } &
    {
        [name in {
            [k in keyof RawFieldCollectionT] : (
                undefined extends AcceptsOf<RawFieldCollectionT[k]> ?
                    k :
                    never
            )
        }[keyof RawFieldCollectionT]]?: AcceptsOf<RawFieldCollectionT[name]>;
    }
);

//https://github.com/Microsoft/TypeScript/issues/26207
export function toSchema<
    RawFieldCollectionT extends RawFieldCollection
> (raw : RawFieldCollectionT) : (
    AssertDelegate<
        {
            [name in keyof ToSchemaType<RawFieldCollectionT>] : (
                TypeOf<RawFieldCollectionT[name]>
            )
        }
    > &
    {
        __accepts : (
            {
                [name in keyof ToSchemaAccepts<RawFieldCollectionT>] : (
                    AcceptsOf<RawFieldCollectionT[name]>
                )
            }
        )
    }
) {
    const fieldCollection = fields(raw);
    const fieldArray : Field<string, any>[] = [];
    for (let k in fieldCollection) {
        if (fieldCollection.hasOwnProperty(k)) {
            //HACK
            fieldArray.push((fieldCollection as any)[k]);
        }
    }
    return schema(...fieldArray) as any;
}
