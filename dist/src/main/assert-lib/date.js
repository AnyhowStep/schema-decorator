"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
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
//# sourceMappingURL=date.js.map