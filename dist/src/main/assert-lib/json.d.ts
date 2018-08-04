import { AssertDelegate } from "../types";
export declare function jsonObjectStr(): AssertDelegate<string> & {
    __accepts: string;
};
export declare function jsonObjectToString(): (AssertDelegate<string> & {
    __accepts: Object;
});
export declare function jsonStringToObject(): (name: string, str: string) => Object;
export declare function jsonObject(): AssertDelegate<Object> & {
    __accepts: string | Object;
};
