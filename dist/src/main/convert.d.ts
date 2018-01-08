import { Assertion } from "./Assertion";
export declare const REGEX_IGNORE_VARIABLE_NAMES: RegExp;
export declare function keepVariableName(name: string): boolean;
export declare function toClass<T>(name: string, raw: any, ctor: {
    new (): T;
}): T;
export declare function anyToRaw(name: string, mixed: any): any;
export declare type Raw<T> = {
    [k in keyof T]: T[k];
};
export declare function toRaw<T>(name: string, instance: T): Raw<T>;
export declare function toClassOrAssert<T>(name: string, raw: any, assertion: Assertion<T>): T;
