import {AssertDelegate} from "../types";
import {cast} from "./cast";
import {finiteNumber} from "./number";
import {boolean, string, oneOf} from "./basic";
import {and} from "./operator";

export function numberToBoolean () : AssertDelegate<boolean> {
    return cast(
        finiteNumber(),
        (raw : number) => {
            return (raw != 0);
        },
        boolean()
    );
}
export function stringToBoolean () : AssertDelegate<boolean> {
    return cast(
        string(),
        (raw : string) => {
            if (raw == "1" || raw.toLowerCase() == "true") {
                return true;
            } else {
                return false;
            }
        },
        boolean()
    );
}

export function numberToTrue () : AssertDelegate<true> {
    return and(
        numberToBoolean(),
        oneOf(true)
    );
}
export function numberToFalse () : AssertDelegate<false> {
    return and(
        numberToBoolean(),
        oneOf(false)
    );
}