"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
const operator_1 = require("./operator");
const cast_1 = require("./cast");
const basic_1 = require("./basic");
const number_2 = require("./number");
const util_1 = require("../util");
//Only checks if Date
function validDate() {
    return (name, mixed) => {
        if (!(mixed instanceof Date)) {
            throw new Error(`Expected ${name} to be a Date; received ${util_1.toTypeStr(mixed)}`);
        }
        const timestamp = mixed.getTime();
        number_1.finiteNumber()(`${name}'s UNIX timestamp`, timestamp);
        return mixed;
    };
}
exports.validDate = validDate;
//Converts string|number to Date
function date() {
    return operator_1.or(cast_1.cast(basic_1.string(), (from) => new Date(from), validDate()), cast_1.cast(number_2.number(), (from) => new Date(from), validDate()), validDate());
}
exports.date = date;
//Given a valid date,
//this will give you the number of *seconds* since the Unix Epoch,
//January 1st, 1970 at UTC.
function dateToUnixTimestamp() {
    return operator_1.chain(date(), (_name, d) => {
        return Math.floor(d.getTime() / 1000);
    });
}
exports.dateToUnixTimestamp = dateToUnixTimestamp;
function dateTimeWithoutMillisecond() {
    return operator_1.chain(date(), dateToUnixTimestamp(), (_name, unixTimestamp) => {
        //A UNIX timestamp only has the number of seconds since Unix Epoch,
        //but new Date() expects it to be the number of milliseconds since Unix Epoch.
        //Multiply by 1000 to convert back to milliseconds (but the millesecond part will be zeroes)
        const d = new Date(unixTimestamp * 1000);
        return d;
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