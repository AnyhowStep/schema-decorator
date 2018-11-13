import * as sd from "../../main/index";
import * as tape from "tape";

tape(__filename + "-deep-equal", (t) => {
    t.true(sd.deepEqual(
        1,
        1
    ));
    t.false(sd.deepEqual(
        1,
        true
    ));
    t.false(sd.deepEqual(
        0,
        false
    ));
    t.true(sd.deepEqual(
        "hello",
        "hello"
    ));
    t.true(sd.deepEqual(
        {
            x : 42
        },
        {
            x : 42
        }
    ));
    t.false(sd.deepEqual(
        {
            x : 42
        },
        {
            x : "42"
        }
    ));
    t.true(sd.deepEqual(
        {
            x : [42, 32]
        },
        {
            x : [42, 32]
        }
    ));
    t.false(sd.deepEqual(
        {
            x : [42, 32]
        },
        {
            x : ["42", 32]
        }
    ));

    t.end();
});
