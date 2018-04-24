export declare type ParamValue = any;
export declare type Param<RawParamT> = {
    [k in keyof RawParamT]: ParamValue;
};
