import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";
import * as myUtil from "./util";

tape("to-raw", (t) => {
    class Foo {
        var : number = 0;
    }
    try {
        schema.toRaw("run-time error", new Foo());
    } catch (err) {
        t.pass(err.message);
    }
    console.log(schema.toRaw("ok", new Foo(), [Foo]));
    t.pass("ignored Foo");
    t.end();
});
