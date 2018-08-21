import * as axios from "axios";
import {Route} from "./Route";
import {
    Request,
    TransformBodyDelegate,
    InjectHeaderDelegate,
    TransformResponseDelegate
} from "./Request";

export interface ApiConfiguration {
    domain : string,
    root? : string,

    onTransformBody? : TransformBodyDelegate,
    onInjectHeader? : InjectHeaderDelegate,
    onTransformResponse? : TransformResponseDelegate,
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

    request<RouteT extends Route<any>> (route : RouteT) : Request<{
        route : RouteT
    }> {
        return Request.Create(this, route)
            .setOnTransformBody(this.config.onTransformBody)
            .setOnInjectHeader(this.config.onInjectHeader)
            .setOnTransformResponse(this.config.onTransformResponse);
    }
}
