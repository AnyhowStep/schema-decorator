import {AssertDelegate} from "../types";
import {and} from "./operator";
import {string} from "./basic";

export function jsonObjectStr () : AssertDelegate<string> {
    return and(
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
export function jsonObject () : AssertDelegate<Object> {
    return (name : string, mixed : any) : Object => {
        if (typeof mixed == "string") {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, mixed);
            return JSON.parse(mixed);
        } else {
            //If this assertion doesn't throw an error,
            //this object is safe to use
            jsonObjectStr()(name, JSON.stringify(mixed));
            return mixed;
        }
    }
}