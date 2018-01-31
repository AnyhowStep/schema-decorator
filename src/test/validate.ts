import * as sd from "../main/index";
import * as tape from "tape";

tape("basic-validate", (t) => {
    class Foo {
        @sd.assert(sd.naturalNumber())
        var : number = 0;
    }
    let validated : sd.Validated<Foo> = sd.validate(Foo);
    validated = sd.validate({
        var : 3
    }, Foo);
    validated = sd.validate("test", {
        var : 45
    }, Foo);
    let regularFoo : Foo = validated;
    console.log(regularFoo, JSON.stringify(regularFoo), Object.keys(regularFoo));
    t.end();
});
