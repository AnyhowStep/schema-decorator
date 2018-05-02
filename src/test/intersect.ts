import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";
import * as myUtil from "./util";

tape("intersect", (t) => {
    //Important to ignore extra variables...
    @schema.ignoreExtraVariables
    class Foo {
        @schema.assert(validation.Number.assertNaturalNumber)
        foo : number = 0;
        @schema.assert(schema.oneOf("hello", "world"))
        same : "hello"|"world" = "hello";
    }
    //Important to ignore extra variables...
    @schema.ignoreExtraVariables
    class Bar {
        @schema.assert(validation.Number.assertNaturalNumber)
        bar : number = 0;
        @schema.assert(schema.oneOf("world"))
        same : "world" = "world";
    }
    //Important to ignore extra variables...
    @schema.ignoreExtraVariables
    class Baz {
        @schema.assert(validation.Number.assertNaturalNumber)
        baz : number = 0;
    }

    myUtil.testAssertDelegate(t, schema.intersect(Foo), {
        foo : 3,
        same : "hello",
    });
    myUtil.testAssertDelegate(t, schema.intersect(Bar), {
        bar : 5,
        same : "world",
    });
    myUtil.testAssertDelegate(t, schema.intersect(Baz), {
        baz : 7,
    });
    myUtil.testAssertDelegate(t, schema.intersect(Foo, Bar), {
        foo : 3,
        bar : 5,
        same : "world",
    });
    myUtil.testAssertDelegate(t, schema.intersect(Foo, Baz), {
        foo : 3,
        baz : 7,
        same : "hello",
    });
    myUtil.testAssertDelegate(t, schema.intersect(Bar, Baz), {
        bar : 5,
        baz : 7,
        same : "world",
    });
    myUtil.testAssertDelegate(t, schema.intersect(Foo, Bar, Baz), {
        foo : 3,
        bar : 5,
        baz : 7,
        same : "world",
    });
    myUtil.failAssertDelegate(t, schema.intersect(Foo, Bar), {
        foo : 3,
        bar : 5,
        same : "hello",
    });
    myUtil.failAssertDelegate(t, schema.intersect(Foo, Baz), {
        foo : 3,
        same : "hello",
    });
    myUtil.failAssertDelegate(t, schema.intersect(Bar, Baz), {
        baz : 7,
        same : "world",
    });
    myUtil.failAssertDelegate(t, schema.intersect(Foo, Bar, Baz), {
        foo : 3,
        bar : 5,
        baz : "7",
        same : "world",
    });
    t.end();
});
