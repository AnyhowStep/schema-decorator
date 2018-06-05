import {
    AssertDelegate,
    nested
} from "../types";
import {Assertion} from "../Assertion";

//TODO delete
export function assertion<T> (assertion : Assertion<T>) : AssertDelegate<T> {
    if (assertion.isCtor) {
        return nested(assertion.func);
    } else {
        return assertion.func;
    }
}