import * as axios from "axios";
import {Route, MethodLiteral, Empty} from "./Route";
import {Request, TransformBodyDelegate} from "./Request";
import {AccessTokenType} from "./AccessToken";
import {Param} from "./Param";

export type InjectHeadersDelegate = (route : Route<any, any, any, any, any, any, any>) => {
    [key : string] : undefined|string|(string[])
};

export interface ApiConfiguration {
    domain : string,
    root? : string,
    onInjectHeaders? : InjectHeadersDelegate,
    onTransformBody? : TransformBodyDelegate,
}

export class Api {
    public readonly instance : axios.AxiosInstance;
    private readonly config : ApiConfiguration;

    public constructor (config : ApiConfiguration) {
        const root = (config.root != null) ?
            config.root : "";

        this.instance = axios.default.create({
            baseURL: `${config.domain}${root}`,
            responseType: "json"
        });
        this.config = config;
    }

    request<
        RawParamT,
        ParamT extends Param<RawParamT>,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT extends AccessTokenType|undefined
    > (route : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodLiteral
    >) : Request<Empty, Empty, Empty, undefined,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        let result = Request.Create(this, route);
        if (this.config.onInjectHeaders != undefined) {
            const headers = this.config.onInjectHeaders(route);
            for (let k in headers) {
                if (headers.hasOwnProperty(k)) {
                    result = result.setHeader(k, headers[k]);
                }
            }
        }
        if (this.config.onTransformBody != undefined) {
            result = result.setOnTransformBody(this.config.onTransformBody);
        }
        return result;

    }
}
