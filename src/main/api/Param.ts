export type ParamValue = boolean|number|string;
export type Param<RawParamT> = {
    [k in keyof RawParamT] : ParamValue;
};
