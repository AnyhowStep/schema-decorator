import { AssertDelegate } from "../types";
export declare function jsonObjectStr(): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
export declare function jsonObjectToString(): (AssertDelegate<string> & {
    __accepts: object;
});
export declare function jsonStringToObject(): (name: string, str: string) => object;
export declare function jsonObject(): AssertDelegate<object> & {
    __accepts: string | object;
    __canAccept: string | object;
};
