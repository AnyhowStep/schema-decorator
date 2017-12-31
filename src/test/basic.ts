import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";
import * as myUtil from "./util";

tape("type", (t) => {
    class Foo {
        @schema.assert(validation.Number.assertNaturalNumber)
        var : number = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.fail(t, Foo, {
        var : 3.1
    });
    myUtil.fail(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {

    });
    myUtil.fail(t, Foo, {
        var : 3,
        extra : 3
    });
    myUtil.fail(t, Foo, {
        var : "3"
    });
    myUtil.fail(t, Foo, {
        var : "3.1"
    });
    myUtil.fail(t, Foo, {
        var : true
    });
    myUtil.fail(t, Foo, {
        var : new Date()
    });
    t.end();
});
tape("typeAndType", (t) => {
    class Foo {
        @schema.assert(schema.and(
            schema.oneOf(3,4),
            schema.oneOf(4,5)
        ))
        var : (3|4)&(4|5) = 4;
    }
    myUtil.test(t, Foo, {
        var : 4
    });
    myUtil.fail(t, Foo, {
        var : 3
    });
    myUtil.fail(t, Foo, {
        var : 5
    });
    myUtil.fail(t, Foo, {
        var : 2
    });
    myUtil.fail(t, Foo, {
        var : 6
    });
    myUtil.fail(t, Foo, {
        var : 1
    });
    myUtil.fail(t, Foo, {
        var : 0
    });
    myUtil.fail(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {

    });
    myUtil.fail(t, Foo, {
        var : 4,
        extra : 3
    });
    myUtil.fail(t, Foo, {
        var : "4"
    });
    myUtil.fail(t, Foo, {
        var : "4.1"
    });
    myUtil.fail(t, Foo, {
        var : true
    });
    myUtil.fail(t, Foo, {
        var : new Date()
    });
    t.end();
});
tape("oneOfOrType", (t) => {
    class Foo {
        @schema.assert(schema.or(
            schema.oneOf("allowed"),
            validation.Number.assertNaturalNumber
        ))
        var : number|"allowed" = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "allowed"
    });
    myUtil.fail(t, Foo, {
        var : 3.1
    });
    myUtil.fail(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {

    });
    myUtil.fail(t, Foo, {
        var : 3,
        extra : 3
    });
    myUtil.fail(t, Foo, {
        var : "3"
    });
    myUtil.fail(t, Foo, {
        var : "3.1"
    });
    myUtil.fail(t, Foo, {
        var : true
    });
    myUtil.fail(t, Foo, {
        var : new Date()
    });
    t.end();
});
tape("oneOfOrCast", (t) => {
    class Foo {
        @schema.assert(schema.or(
            schema.oneOf("allowed"),
            schema.cast(
                validation.NumberString.assertNaturalNumberString,
                parseInt,
                validation.Number.assertNaturalNumber
            )
        ))
        var : number|"allowed" = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "3"
    }, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "allowed"
    });
    myUtil.fail(t, Foo, {
        var : "3.2"
    });
    t.end();
});
tape("cast", (t) => {
    class Foo {
        @schema.assert(schema.cast(
            validation.NumberString.assertNaturalNumberString,
            parseInt,
            validation.Number.assertNaturalNumber
        ))
        var : number = 0;
    }
    myUtil.test(t, Foo, {
        var : "3"
    }, {
        var : 3
    });
    t.end();
});

tape("optional", (t) => {
    class Foo {
        @schema.assert(schema.optional(validation.Number.assertNaturalNumber))
        var? : number;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
    });
    myUtil.test(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {
        var : null
    });
    t.end();
});
tape("nullable", (t) => {
    class Foo {
        @schema.assert(schema.nullable(validation.Number.assertNaturalNumber))
        var : number|null = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : null
    });
    myUtil.fail(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {

    });
    t.end();
});
tape("maybe", (t) => {
    class Foo {
        @schema.assert(schema.maybe(validation.Number.assertNaturalNumber))
        var : number|null|undefined = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : null
    });
    myUtil.test(t, Foo, {
        var : undefined
    });
    myUtil.test(t, Foo, {
    });
    t.end();
});

tape("optionalCast", (t) => {
    class Foo {
        @schema.assert(
            schema.optional(
                schema.cast(validation.NumberString.assertNaturalNumberString, parseInt, validation.Number.assertNaturalNumber)
            )
        )
        var? : number;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "3"
    }, {
        var : 3
    });
    myUtil.test(t, Foo, {
    });
    myUtil.test(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {
        var : null
    });
    myUtil.fail(t, Foo, {
        var : "3.2"
    });
    t.end();
});

tape("nullableCast", (t) => {
    class Foo {
        @schema.assert(
            schema.nullable(
                schema.cast(validation.NumberString.assertNaturalNumberString, parseInt, validation.Number.assertNaturalNumber)
            )
        )
        var : number|null = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "3"
    }, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : null
    });
    myUtil.fail(t, Foo, {
        var : undefined
    });
    myUtil.fail(t, Foo, {
    });
    myUtil.fail(t, Foo, {
        var : "3.2"
    });
    t.end();
});
tape("maybeCast", (t) => {
    class Foo {
        @schema.assert(
            schema.maybe(
                schema.cast(validation.NumberString.assertNaturalNumberString, parseInt, validation.Number.assertNaturalNumber)
            )
        )
        var : number|null|undefined = 0;
    }
    myUtil.test(t, Foo, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : "3"
    }, {
        var : 3
    });
    myUtil.test(t, Foo, {
        var : null
    });
    myUtil.test(t, Foo, {
    });
    myUtil.test(t, Foo, {
        var : undefined
    });
    t.end();
});
