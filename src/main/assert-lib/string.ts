import {AssertDelegate} from "../types";
import {and} from "./operator";
import {string} from "./basic";
import {finiteNumber, integer, naturalNumber} from "./number";
import {cast} from "./cast";
import {length} from "./array-like";

export function finiteNumberString () : AssertDelegate<string> {
    return and(
        string(),
        (name : string, mixed : string) : string => {
            const toCheck = parseFloat(mixed);
            finiteNumber()(`${name}'s number value`, toCheck);
            return mixed;
        }
    );
}
export function integerString () : AssertDelegate<string> {
    return and(
        string(),
        (name : string, mixed : string) : string => {
            const toCheck = parseFloat(mixed);
            integer()(`${name}'s number value`, toCheck);
            return mixed;
        }
    );
}
export function naturalNumberString () : AssertDelegate<string> {
    return and(
        string(),
        (name : string, mixed : string) : string => {
            const toCheck = parseFloat(mixed);
            naturalNumber()(`${name}'s number value`, toCheck);
            return mixed;
        }
    );
}

export function stringToNumber () : AssertDelegate<number> {
    return cast(
        finiteNumberString(),
        parseFloat,
        finiteNumber()
    );
}
export function stringToInteger () : AssertDelegate<number> {
    return cast(
        integerString(),
        parseInt,
        integer()
    );
}
export function stringToNaturalNumber () : AssertDelegate<number> {
    return cast(
        naturalNumberString(),
        parseInt,
        naturalNumber()
    );
}

export function stringLength (max : number) : AssertDelegate<string>;
export function stringLength (min : number, max : number) : AssertDelegate<string>;
export function stringLength (arg0 : number, arg1? : number) : AssertDelegate<string>;
export function stringLength (arg0 : number, arg1? : number) : AssertDelegate<string> {
    return and(
        string(),
        length(arg0, arg1)
    )
}

export function varChar (max : number) : AssertDelegate<string>;
export function varChar (min : number, max : number) : AssertDelegate<string>;
export function varChar (arg0 : number, arg1? : number) : AssertDelegate<string>;
export function varChar (arg0 : number, arg1? : number) : AssertDelegate<string> {
    return stringLength(arg0, arg1);
}