import {AssertDelegate} from "../types";
import {chain, and} from "./operator";
import {string} from "./basic";
import {finiteNumber, integer, naturalNumber} from "./number";
import {cast} from "./cast";
import {length} from "./array-like";

export function finiteNumberString () {
    return chain(
        string(),
        (name : string, str : string) : string => {
            const toCheck = parseFloat(str);
            finiteNumber()(`${name}'s number value`, toCheck);
            return str;
        }
    );
}
export function integerString () {
    return chain(
        string(),
        (name : string, str : string) : string => {
            const toCheck = parseFloat(str);
            integer()(`${name}'s number value`, toCheck);
            return str;
        }
    );
}
export function naturalNumberString () {
    return chain(
        string(),
        (name : string, str : string) : string => {
            const toCheck = parseFloat(str);
            naturalNumber()(`${name}'s number value`, toCheck);
            return str;
        }
    );
}

export function stringToNumber () {
    return cast(
        finiteNumberString(),
        parseFloat,
        finiteNumber()
    );
}
export function stringToInteger () {
    return cast(
        integerString(),
        parseInt,
        integer()
    );
}
export function stringToNaturalNumber () {
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
    );
}

export function varChar (max : number) : AssertDelegate<string>;
export function varChar (min : number, max : number) : AssertDelegate<string>;
export function varChar (arg0 : number, arg1? : number) : AssertDelegate<string>;
export function varChar (arg0 : number, arg1? : number) : AssertDelegate<string> {
    return stringLength(arg0, arg1);
}

export function char (length : number) {
    return stringLength(length, length);
}

export function match (regex : RegExp) {
    return chain(
        string(),
        (name : string, mixed : string) : string => {
            if (regex.test(mixed)) {
                return mixed;
            } else {
                throw new Error(`${name} does not match ${regex.source}, received ${mixed}`);
            }
        }
    );
}

export function email () : AssertDelegate<string> {
    return chain(
        string(),
        (name : string, mixed : string) : string => {
            if (/^.+@.+$/.test(mixed)) {
                return mixed;
            } else {
                throw new Error(`${name} must be an email address, received ${mixed}`);
            }
        }
    );
}