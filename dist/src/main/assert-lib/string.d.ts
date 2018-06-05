import { AssertDelegate } from "../types";
export declare function finiteNumberString(): AssertDelegate<string>;
export declare function integerString(): AssertDelegate<string>;
export declare function naturalNumberString(): AssertDelegate<string>;
export declare function stringToNumber(): AssertDelegate<number>;
export declare function stringToInteger(): AssertDelegate<number>;
export declare function stringToNaturalNumber(): AssertDelegate<number>;
export declare function stringLength(max: number): AssertDelegate<string>;
export declare function stringLength(min: number, max: number): AssertDelegate<string>;
export declare function stringLength(arg0: number, arg1?: number): AssertDelegate<string>;
export declare function varChar(max: number): AssertDelegate<string>;
export declare function varChar(min: number, max: number): AssertDelegate<string>;
export declare function varChar(arg0: number, arg1?: number): AssertDelegate<string>;
