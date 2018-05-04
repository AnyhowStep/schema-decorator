"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("./assert");
class Field {
    constructor(name, assert) {
        this.name = name;
        this.assert = assert;
        this.assertDelegate = assert_1.toAssertDelegateExact(assert);
    }
    maybe() {
        return new Field(this.name, assert_1.maybe(this.assertDelegate));
    }
    optional() {
        return new Field(this.name, assert_1.optional(this.assertDelegate));
    }
    nullable() {
        return new Field(this.name, assert_1.nullable(this.assertDelegate));
    }
    withName(name) {
        return new Field(name, this.assert);
    }
    withAssert(assert) {
        return new Field(this.name, assert);
    }
}
exports.Field = Field;
function field(name, assert) {
    return new Field(name, assert);
}
exports.field = field;
//# sourceMappingURL=field.js.map