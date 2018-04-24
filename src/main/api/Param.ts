//For now, relax rules,
//You might have a CastDelegate that creates an object from a string
//export type ParamValue = boolean|number|string;
export type ParamValue = any;
export type Param<RawParamT> = {
    [k in keyof RawParamT] : ParamValue;
};
