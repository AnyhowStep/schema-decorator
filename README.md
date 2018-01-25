# `schema-decorator`

Security for web apps is important. User input should never be trusted.
Validation and sanitization can be laborous, and mistakes can slip by easily.

Responses from API endpoints should also never be trusted; changes may roll out
and quietly cause calling code to break (e.g. fields are removed/added/changed).

# Goals

We must validate/sanitize the following

+ Route parameters
  (e.g. Validate that `id` is a natural number in `GET /posts/${id}`)
+ Query strings
  (e.g. Validate that `before` is a date in `GET /posts?before=${before}`)
+ JSON bodies
  (e.g. Validate that `title` is a non-empty string in `POST /posts`)
+ JSON responses
  (e.g. Validate that `title` is a non-empty string in `GET /posts/${id}`)

# Installation

`npm install --save schema-decorator`

You may also explicitly install the following for more validators to start with,

`npm install --save @anyhowstep/data-validation`

# Usage

See `api.ts/basic-array.ts/basic.ts/built-in.ts/inheritance.ts/nested.ts` in `./src/test/`
for more examples.

## Property Assertions

You may use the `@schema.assert()` decorator on properties of classes.
The decorator will do the following when run:

1. **CREATE** an accessor on the class **prototype**, with the same name as the property.
1. Generate a property name that has the same name as the property, prefixed with `____hijacked-by-schema-decorator-`.

When the accessor on the **prototype** has its `set()` is called for the first time,
it does the following:

1. **CREATE** a *non-enumerable* property on the **instance**, with the generated prefixed name (`____hijacked-by-schema-decorator-`).
1. Set the value of the *non-enumerable* property.
1. **CREATE** an *enumerable* accessor on the **instance**, with the same name as the property.

Subsequent writes will use the accessor on the **instance**.

This is needed because when `Object.keys()` is called on the **instance**,
if the enumerable accessor is on the **prototype**, it will not be returned
in the array of keys.

So, we need the accessor to be on the **instance**.

But property decorators are called with the **prototype**, and not the instance!

So, the accessor we put on the **prototype** will create the accessor on the instance for us.

-----

When the accessor's `set()` is called,

1. The type assertion given to `@schema.assert()` is run.
1. The `____hijacked-by-schema-decorator-` prefixed property value is set.

When the accessor's `get()` is called,

1. The value of the `____hijacked-by-schema-decorator-` prefixed property is returned.

**WARNING:** Yes, this means that we're modifying the structure of the class
during run-time. Yes, this is hacky.

**UPDATE:**

Prior to version `1.10.0`, the hack would cause `Object.keys()` to break.

`toRaw()` had to be used to convert to a raw object that would work with `Object.keys()`
and `JSON.stringify()`.

As of version `1.10.0`, `Object.keys()` will now return the keys, as expected.

Look at `./src/test/using-property-assertion.ts` for an executable example.

## Creating Assertions

`@schema.assert()` expects an assert delegate, which looks like:

```
export type AssertDelegate<T> = (name : string, mixed : any) => T;
```

As long as your function fits that shape, you have an assert delegate.

An `AssertDelegate` should:

1. Return the unmodified `mixed` if it is the right data type
1. Throw an error with `name`, and relevant descriptive information otherwise

It is *bad behaviour* to modify `mixed` and return it or return something else entirely.

-----

The only exception is `schema.array()` which creates an `AssertDelegate<T[]>` from `AssertDelegate<T>`.

If at least one element returned by `AssertDelegate<T>` is not the original element,
the whole array is copied and an array with the new elements is returned.

If an `AssertDelegate` returns a result that is not the original `mixed`, it is generally
considered *bad behaviour*.

The original array is never modified.

## Creating Casters

`schema.cast()` creates an `AssertDelegate` that does the following.

1. If `mixed` is the desired data type, return it.
1. If we cannot cast `mixed` to the desired data type, throw an error.
1. Cast `mixed` into the desired data type.
1. If the casted value is the desired data type, return it.
1. If not, throw an error.

Notice that this is possibly returning a value that is not `mixed`.

This is sometimes necessary, especially for `Date`.

While `Date` is an object in Javascript/TypeScript, it gets serialized into a
date-`string` over JSON.

To allow such cases where the serialized data type does not match the
desired data type, we allow casting.

Examples of `schema.cast()` may be found in `basic.ts`.

`schema.date()` returns an `AssertDelegate` that converts `string|number` to `Date`,
and checks that they are valid dates.

## Converters

You may use `schema.toClass()` to convert to a class instance (class instances have field checks)
or `schema.toRaw()` to convert to a "raw" object ("raw" objects have no field checks).

The following restrictions must be met to convert to a class instance or raw object:

1. There must be a public no-arg constructor. (i.e. `public constructor() {/*init*/}`)
1. All class fields must have the `@schema.assert()` decorator.

If either is not met, you will receive a transpile-time/run-time error.

```
//Using the same `Foo` above
schema.toClass("run-time error", {
    value : true
}, Foo);
schema.toClass("run-time error", {
    value : 3
}, Foo);
schema.toClass("run-time error", {
    value : new Date()
}, Foo);

const a = schema.toClass("OK", {
    value : "true"
}, Foo);
console.log(a instanceof Foo); //Prints `true`
const b = schema.toClass("OK", {
    value : "3"
}, Foo);
console.log(b instanceof Foo); //Prints `true`

const bar = new Foo();
bar.value = "Hi";
const raw = schema.toRaw("OK", bar);
console.log(raw) //Prints `{ value : "Hi" }`
console.log(raw instanceof Foo); //Prints `false`
```

Look at `./src/test/using-converter.ts` for an executable example.

## API

You don't *have* to use this to make your API requests. You could use just the
property assertions or converters in your code to make it more secure.

This part just provides a starting point for how you could possibly code
a REST client.

The API uses the converters internally. So, the same restrictions apply to the
classes you pass to it.

The following executes a `GET /posts/1` on <https://jsonplaceholder.typicode.com>

```
import * as schema from "schema-decorator";
import * as validation from "@anyhowstep/data-validation";
class Parameter {
    @schema.assert(validation.Number.assertNaturalNumber)
    id : number = 1;
}
class Response {
    @schema.assert(validation.Number.assertNaturalNumber)
    userId : number = 1;
    @schema.assert(validation.Number.assertNaturalNumber)
    id : number = 1;
    @schema.assert(validation.String.assertNonEmpty)
    title : string = "-";
    @schema.assert(validation.String.assertNonEmpty)
    body : string = "-";
}

const domain = "https://jsonplaceholder.typicode.com";
const api = new schema.Api({
    domain : domain,
});
const fetch = schema.Route.Create()
    .append("/posts")
    .appendParam("id", /\d+/)
    .param(Parameter)
    .response(Response);
await api.request(fetch)
    .setParam({
        id : 1
    })
    .send()
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.error(err);
        throw err;
    });
```

Look at `./src/test/api.ts` for an executable example.

# Limitations

It is possible to assign the wrong type of assertion to a field:

```
import * as schema from "schema-decorator";
function isString (name : string, mixed : any) : string {
    if (typeof mixed == "string") {
        return mixed;
    } else {
        throw new Error(`Expected ${name} to be a string, received ${mixed}`);
    }
}
class Foo {
    @schema.assert(isString) //Transpile-OK
    value : number = 300;
}
console.log(new Foo()); //Run-Error
```

Notice that the field is of type `number` but we are asserting that it is a `string`.

It is not possible, at the moment, to check that the assertion type is assignable
to the property type.

You could, technically, do it by emitting metadata information and checking it
during run-time if the type is not assignable, but both adding this check, and not
adding it will give run-time errors and not transpile-time errors.

This case of using the wrong assertion type will be treated as [GIGO](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out).

# Non-Goals

The following are non-goals:

+ Using reflection (for now)
+ Efficiency

  While it isn't ridiculously slow, it isn't the fastest code in the world.
  There *is* overhead in checking every data-type, for possibly deeply-nested hierarchies.
  There *is* overhead in creating all these anonymous functions.

  You may use the `schema.any()` `AssertDelegate` to remove type checks for certain fields,
  but you should be very careful and I do not recommend it.

# Tests

You may run all tests with `npm run test-all`.

You may run individual tests with `npm run test ./src/test/api.ts`, replacing `api.ts` with
any other test file name.

# License

Do what you want with this as long as you do no evil.
