import {
    AnyAssertFunc,
    toAssertDelegateExact
} from "../types";
import {or} from "./operator";
import {literal, excludeLiteral} from "./basic";

export function optional<F extends AnyAssertFunc> (assert : F) {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        literal(undefined),
        assertDelegate
    );
}
export function nullable<F extends AnyAssertFunc> (assert : F) {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        literal(null),
        assertDelegate
    );
}
export function maybe<F extends AnyAssertFunc> (assert : F) {
    const assertDelegate = toAssertDelegateExact(assert);
    return or(
        literal(undefined, null),
        assertDelegate
    );
}

export function notOptional<F extends AnyAssertFunc> (assert : F) {
    return excludeLiteral(assert, undefined);
}
export function notNullable<F extends AnyAssertFunc> (assert : F) {
    return excludeLiteral(assert, null);
}
export function notMaybe<F extends AnyAssertFunc> (assert : F) {
    return excludeLiteral(assert, null, undefined);
}