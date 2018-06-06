"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
const operator_1 = require("./operator");
//Only checks if Date
function validDate() {
    return (name, mixed) => {
        if (!(mixed instanceof Date)) {
            throw new Error(`${name} is not a Date`);
        }
        const timestamp = mixed.getTime();
        number_1.finiteNumber()(`${name}'s UNIX timestamp`, timestamp);
        return mixed;
    };
}
exports.validDate = validDate;
//Converts string|number to Date
function date() {
    return (name, mixed) => {
        if (typeof mixed == "string") {
            const result = new Date(mixed);
            return validDate()(name, result);
        }
        else if (typeof mixed == "number") {
            const result = new Date(mixed);
            return validDate()(name, result);
        }
        else if (mixed instanceof Date) {
            return validDate()(name, mixed);
        }
        else {
            throw new Error(`Expected ${name} to be a Date, Date string, or Date number`);
        }
    };
}
exports.date = date;
function dateTimeWithoutMillisecond() {
    return operator_1.and(date(), (_name, mixed) => {
        //To remove the millisecond part,
        //+ Divide by 1000 to get the time in seconds
        //+ Convert to an integer
        //+ Multiply by 1000 to convert back to milliseconds (but the millesecond part will be zeroes)
        const withoutMs = new Date(Math.floor(mixed.getTime() / 1000) * 1000);
        return withoutMs;
    });
}
exports.dateTimeWithoutMillisecond = dateTimeWithoutMillisecond;
//Behaves like MySQL DATETIME, alias for dateTimeWithoutMillisecond()
function dateTime() {
    return dateTimeWithoutMillisecond();
}
exports.dateTime = dateTime;
//Alias for date()
function dateTimeWithMillisecond() {
    return date();
}
exports.dateTimeWithMillisecond = dateTimeWithMillisecond;
//Behaves like MySQL DATETIME(3), alias for date()
function dateTime3() {
    return date();
}
exports.dateTime3 = dateTime3;
//# sourceMappingURL=date.js.map