import * as axios from "axios";
import {Route, MethodLiteral, Empty} from "./Route";
import {Request} from "./Request";
import {AccessTokenType} from "./AccessToken";
import {Param} from "./Param";

export interface ApiConfiguration {
    domain : string,
    root? : string
}

export class Api {
    public readonly instance : axios.AxiosInstance;

    public constructor (config : ApiConfiguration) {
        const root = (config.root != null) ?
            config.root : "";

        this.instance = axios.default.create({
            baseURL: `${config.domain}${root}`,
            responseType: "json"
        });
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
        return Request.Create(this, route);
    }
}
