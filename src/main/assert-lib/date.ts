import {AssertDelegate} from "../types";
import {finiteNumber} from "./number";
import {and} from "./operator";

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

export function dateTimeWithoutMillisecond () : AssertDelegate<Date> {
    return and(
        date(),
        (_name : string, mixed : Date) : Date => {
            //To remove the millisecond part,
            //+ Divide by 1000 to get the time in seconds
            //+ Convert to an integer
            //+ Multiply by 1000 to convert back to milliseconds (but the millesecond part will be zeroes)
            const withoutMs = new Date(Math.floor(mixed.getTime() / 1000) * 1000);
            return withoutMs;
        }
    );
}
//Behaves like MySQL DATETIME, alias for dateTimeWithoutMillisecond()
export function dateTime () : AssertDelegate<Date> {
    return dateTimeWithoutMillisecond();
}

//Alias for date()
export function dateTimeWithMillisecond () : AssertDelegate<Date> {
    return date();
}
//Behaves like MySQL DATETIME(3), alias for date()
export function dateTime3 () : AssertDelegate<Date> {
    return date();
}