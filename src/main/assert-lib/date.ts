import {finiteNumber} from "./number";
import {chain, or} from "./operator";
import {cast} from "./cast";
import {string} from "./basic";
import {number} from "./number";

//Only checks if Date
export function validDate () {
    return (name : string, mixed : unknown) : Date => {
        if (!(mixed instanceof Date)) {
            throw new Error(`${name} is not a Date`);
        }
        const timestamp = mixed.getTime();
        finiteNumber()(`${name}'s UNIX timestamp`, timestamp);
        return mixed;
    };
}

//Converts string|number to Date
export function date () {
    return or(
        cast(
            string(),
            (from) => new Date(from),
            validDate()
        ),
        cast(
            number(),
            (from) => new Date(from),
            validDate()
        ),
        validDate()
    );
}

export function dateTimeWithoutMillisecond () {
    return chain(
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
export function dateTime () {
    return dateTimeWithoutMillisecond();
}

//Alias for date()
export function dateTimeWithMillisecond () {
    return date();
}
//Behaves like MySQL DATETIME(3), alias for date()
export function dateTime3 () {
    return date();
}