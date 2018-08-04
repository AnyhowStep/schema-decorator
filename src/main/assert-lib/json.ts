import {AssertDelegate} from "../types";
import {or, chain} from "./operator";
import {string} from "./basic";

export function jsonObjectStr () {
    return chain(
        string(),
        (name : string, str : string) : string => {
            let jsonObject : Object|undefined = undefined;
            try {
                jsonObject = JSON.parse(str);
            } catch (err) {
                throw new Error(`Expected ${name} to be a valid JSON string; ${err.message}`);
            }
            const jsonStr = JSON.stringify(jsonObject);
            if (jsonStr[0] != "{") {
                throw new Error(`Expected ${name} to be a JSON object, received ${jsonStr}`);
            }
            //We return the result of JSON.stringify() to use the minimal amount of space
            return jsonStr;
        }
    );
}
export function jsonObjectToString () : (
    AssertDelegate<string> &
    {
        __accepts : Object
    }
) {
    return ((name : string, mixed : unknown) => {
        if (!(mixed instanceof Object) || (mixed instanceof Date) || (mixed instanceof Array) || (mixed instanceof Function)) {
            throw new Error(`${name} is not a valid JSON object; expected an object; received ${mixed}`);
        }
        try {
            return JSON.stringify(mixed);
        } catch (err) {
            throw new Error(`${name} is not a valid JSON object; ${err.message}`);
        }
    }) as any;
}
export function jsonStringToObject () {
    return (name : string, str : string) : Object => {
        try {
            return JSON.parse(str);
        } catch (err) {
            throw new Error(`${name} is not a valid JSON string; ${err.message}`);
        }
    };
}
export function jsonObject () {
    return or(
        chain(
            jsonObjectStr(),
            jsonStringToObject()
        ),
        chain(
            jsonObjectToString(),
            jsonObjectStr(),
            jsonStringToObject()
        )
    );
}