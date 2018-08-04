import { AssertDelegate } from "../types";
export declare enum Enum {
}
export declare function enumeration<E extends typeof Enum>(e: E): (AssertDelegate<E[keyof E]> & {
    __accepts: (Extract<keyof E, string> | E[keyof E]);
});
export declare function enumerationKey<E extends typeof Enum>(e: E): (AssertDelegate<Extract<keyof E, string>> & {
    __accepts: (Extract<keyof E, string> | E[keyof E]);
});
export declare function toEnumeration<E extends typeof Enum>(e: E): (AssertDelegate<E[keyof E]> & {
    __accepts: (Extract<keyof E, string> | E[keyof E]);
});
export declare function toEnumerationKey<E extends typeof Enum>(e: E): (AssertDelegate<Extract<keyof E, string>> & {
    __accepts: (Extract<keyof E, string> | E[keyof E]);
});
