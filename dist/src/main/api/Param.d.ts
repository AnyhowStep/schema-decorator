export declare type ParamValue = boolean | number | string;
export declare type Param<RawParamT> = {
    [k in keyof RawParamT]: ParamValue;
};
