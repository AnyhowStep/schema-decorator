import { Assertion } from "./Assertion";
export declare const REGEX_IGNORE_VARIABLE_NAMES: RegExp;
export declare function keepVariableName(name: string): boolean;
export declare function ignoreExtraVariables<CtorT extends {
    new (...args: any[]): {};
}>(ctor: CtorT): {
    new (...args: any[]): {
        [IGNORE_EXTRA_VARIABLES]: boolean;
    };
} & CtorT;
export declare function toClass<T>(name: string, raw: any, ctor: {
    new (): T;
}): T;
export declare function anyToRaw(name: string, mixed: any, ignoreInstancesOf?: {
    new (...args: any[]): any;
}[]): any;
export declare type Raw<T> = {
    [k in keyof T]: T[k];
};
export declare function toRaw<T>(name: string, instance: T, ignoreInstancesOf?: {
    new (...args: any[]): any;
}[]): Raw<T>;
export declare function toClassOrAssert<T>(name: string, raw: any, assertion: Assertion<T>): T;
