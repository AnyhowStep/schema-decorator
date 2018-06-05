import {AssertDelegate} from "../types";
import {notMaybe} from "./missing-value";
import {naturalNumber} from "./number";
import {and} from "./operator";

export function maxLength (max : number) : AssertDelegate<{ length : number }> {
    return notMaybe((name : string, mixed : any) : { length : number } => {
        const length = naturalNumber()(`${name}.length`, mixed.length);
        if (length > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${mixed.length}`);
        }
        return mixed;
    })
}
export function minLength (max : number) : AssertDelegate<{ length : number }> {
    return notMaybe((name : string, mixed : any) : { length : number } => {
        const length = naturalNumber()(`${name}.length`, mixed.length);
        if (length < max) {
            throw new Error(`${name} cannot be shorter than ${max}, received ${mixed.length}`);
        }
        return mixed;
    })
}
export function length (max : number) : AssertDelegate<{ length : number }>;
export function length (min : number, max : number) : AssertDelegate<{ length : number }>;
export function length (arg0 : number, arg1? : number) : AssertDelegate<{ length : number }>;
export function length (arg0 : number, arg1? : number) : AssertDelegate<{ length : number }> {
    if (arg1 == undefined) {
        return maxLength(arg0);
    } else {
        return and(
            minLength(arg0),
            maxLength(arg1)
        );
    }
}