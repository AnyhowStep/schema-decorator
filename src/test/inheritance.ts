import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";
import * as myUtil from "./util";

tape("inheritance", (t) => {
    class Base {
        @schema.assert(validation.Number.assertNaturalNumber)
        base : number = 42;
    }
    class Derived extends Base {
        @schema.assert(validation.Number.assertNaturalNumber)
        var : number = 0;
    }
    myUtil.test(t, Derived, {
        base : 99,
        var : 100
    });
    myUtil.fail(t, Derived, {
        var : 3
    });
    myUtil.fail(t, Derived, {
        base : 3
    });
    myUtil.fail(t, Derived, {
        base : 99,
        var : 100,
        extra : 101
    });
    myUtil.fail(t, Derived, {
        var : 3,
        base : "99"
    });
    myUtil.fail(t, Derived, {
        var : "3",
        base : "99"
    });
    myUtil.fail(t, Derived, {
        var : "3",
        base : 99
    });
    t.end();
});
