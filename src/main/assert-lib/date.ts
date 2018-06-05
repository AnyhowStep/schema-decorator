import {AssertDelegate} from "../types";
import {finiteNumber} from "./number";

//Only checks if Date
export function validDate () : AssertDelegate<Date> {
    return (name : string, mixed : any) : Date => {
        if (!(mixed instanceof Date)) {
            throw new Error(`${name} is not a Date`);
        }
        const timestamp = mixed.getTime();
        finiteNumber()(`${name}'s UNIX timestamp`, timestamp);
        return mixed;
    };
}

//Converts string|number to Date
export function date () : AssertDelegate<Date> {
    return (name : string, mixed : any) : Date => {
        if (typeof mixed == "string") {
            const result = new Date(mixed);
            return validDate()(name, result);
        } else if (typeof mixed == "number") {
            const result = new Date(mixed);
            return validDate()(name, result);
        } else if (mixed instanceof Date) {
            return validDate()(name, mixed);
        } else {
            throw new Error(`Expected ${name} to be a Date, Date string, or Date number`);
        }
    };
}
