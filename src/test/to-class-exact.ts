import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";

tape("to-class-exact", (t) => {
    @schema.ignoreExtraVariables
    class Base {
        @schema.assert(validation.Number.assertNaturalNumber)
        var : number = 0;
    }
    class Derived extends Base {
        @schema.assert(validation.Number.assertNaturalNumber)
        someValueInDerived : number = 0;
    }

    const d = new Derived();
    t.assert(d instanceof Derived, "d is derived");
    t.assert(d instanceof Base, "d is base");

    const b = schema.toClass("d", d, Base);
    t.assert(b instanceof Derived, "b is still derived");
    t.assert(b instanceof Base, "b is still base");

    const bExact = schema.toClassExact("d", d, Base);
    t.assert(!(bExact instanceof Derived), "bExact is NOT derived");
    t.assert(bExact instanceof Base, "bExact is base");

    t.end();
});
