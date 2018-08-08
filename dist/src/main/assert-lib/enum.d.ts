import { AssertDelegate } from "../types";
export declare enum Enum {
}
export declare function enumeration<E extends typeof Enum>(e: E): (AssertDelegate<E[keyof E]> & {
    __accepts: E[keyof E];
    __canAccept: E[keyof E];
});
export declare function enumerationKey<E extends typeof Enum>(e: E): (AssertDelegate<Extract<keyof E, string>> & {
    __accepts: Extract<keyof E, string>;
    __canAccept: Extract<keyof E, string>;
});
export declare function toEnumeration<E extends typeof Enum>(e: E): (AssertDelegate<E[keyof E]> & {
    __accepts: E[keyof E];
    __canAccept: (Extract<keyof E, string> | E[keyof E]);
});
export declare function toEnumerationKey<E extends typeof Enum>(e: E): (AssertDelegate<Extract<keyof E, string>> & {
    __accepts: Extract<keyof E, string>;
    __canAccept: (Extract<keyof E, string> | E[keyof E]);
});
export declare function toOneEnumerationKey<E extends typeof Enum, K extends (keyof E) & string>(e: E, k: K): (AssertDelegate<K> & {
    __accepts: K;
    __canAccept: (K | E[K]);
});
export declare function toSubsetEnumerationKey<E extends typeof Enum, KArr extends ((keyof E) & string)[]>(e: E, ...kArr: KArr): (AssertDelegate<{
    [k in Exclude<keyof KArr, keyof any[]>]: (KArr[k]);
}[Exclude<keyof KArr, keyof any[]>]> & {
    __accepts: {
        [k in Exclude<keyof KArr, keyof any[]>]: (KArr[k]);
    }[Exclude<keyof KArr, keyof any[]>];
    __canAccept: ({
        [k in Exclude<keyof KArr, keyof any[]>]: (KArr[k]);
    }[Exclude<keyof KArr, keyof any[]>] | E[Extract<{
        [k in Exclude<keyof KArr, keyof any[]>]: (KArr[k]);
    }[Exclude<keyof KArr, keyof any[]>], keyof E>]);
});
