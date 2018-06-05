"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operator_1 = require("./operator");
const basic_1 = require("./basic");
function jsonObjectStr() {
    return operator_1.and(basic_1.string(), (name, str) => {
        let jsonObject = undefined;
        try {
            jsonObject = JSON.parse(str);
        }
        catch (err) {
            throw new Error(`Expected ${name} to be a valid JSON string; ${err.message}`);
        }
        const jsonStr = JSON.stringify(jsonObject);
        if (jsonStr[0] != "{") {
            throw new Error(`Expected ${name} to be a JSON object, received ${jsonStr}`);
        }
        //We return the result of JSON.stringify() to use the minimal amount of space
        return jsonStr;
    });
}
exports.jsonObjectStr = jsonObjectStr;
function jsonObject() {
    return (name, mixed) => {
        if (typeof mixed == "string") {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, mixed);
            return JSON.parse(mixed);
        }
        else {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, JSON.stringify(mixed));
            return mixed;
        }
    };
}
exports.jsonObject = jsonObject;
//# sourceMappingURL=json.js.map