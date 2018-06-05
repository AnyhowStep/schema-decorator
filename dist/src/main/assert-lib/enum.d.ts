import { AssertDelegate } from "../types";
export declare enum Enum {
}
export declare function enumeration<E extends typeof Enum>(e: E): AssertDelegate<E[keyof E]>;
export declare function enumeration(e: {}): AssertDelegate<string | number>;
