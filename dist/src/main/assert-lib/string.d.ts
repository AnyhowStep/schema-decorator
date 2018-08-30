import { AssertDelegate } from "../types";
export declare function finiteNumberString(): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
export declare function integerString(): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
export declare function naturalNumberString(): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
export declare function stringToNumber(): AssertDelegate<number> & {
    __accepts: number;
    __canAccept: string | number;
};
export declare function stringToInteger(): AssertDelegate<number> & {
    __accepts: number;
    __canAccept: string | number;
};
export declare function stringToNaturalNumber(): AssertDelegate<number> & {
    __accepts: number;
    __canAccept: string | number;
};
export declare function stringLength(max: number): AssertDelegate<string>;
export declare function stringLength(min: number, max: number): AssertDelegate<string>;
export declare function stringLength(arg0: number, arg1?: number): AssertDelegate<string>;
export declare function varChar(max: number): AssertDelegate<string>;
export declare function varChar(min: number, max: number): AssertDelegate<string>;
export declare function varChar(arg0: number, arg1?: number): AssertDelegate<string>;
export declare function char(length: number): AssertDelegate<string>;
export declare function match(regex: RegExp): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
export declare function email(): AssertDelegate<string>;
export declare function hexadecimalString(): AssertDelegate<string> & {
    __accepts: string;
    __canAccept: string;
};
