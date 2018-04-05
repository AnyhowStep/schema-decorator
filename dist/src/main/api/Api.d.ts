import * as axios from "axios";
import { Route, MethodLiteral, Empty } from "./Route";
import { Request } from "./Request";
import { AccessTokenType } from "./AccessToken";
import { Param } from "./Param";
export declare type InjectHeadersDelegate = (route: Route<any, any, any, any, any, any, any>) => {
    [key: string]: undefined | string | (string[]);
};
export interface ApiConfiguration {
    domain: string;
    root?: string;
    onInjectHeaders?: InjectHeadersDelegate;
}
export declare class Api {
    readonly instance: axios.AxiosInstance;
    private readonly config;
    constructor(config: ApiConfiguration);
    request<RawParamT, ParamT extends Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined>(route: Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodLiteral>): Request<Empty, Empty, Empty, undefined, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
}
