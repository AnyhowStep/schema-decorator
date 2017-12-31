import * as schema from "../main/index";
//import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";
import * as myUtil from "./util";

tape("date", (t) => {
    class Foo {
        @schema.assert(schema.date())
        var : Date = new Date(0);
    }
    myUtil.test(t, Foo, {
        var : new Date()
    }, {
        var : new Date()
    });
    t.end();
});
