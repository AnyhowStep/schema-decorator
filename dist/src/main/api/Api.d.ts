import * as axios from "axios";
import { Route } from "./Route";
import { Request, TransformBodyDelegate, InjectHeaderDelegate, TransformResponseDelegate } from "./Request";
export interface ApiConfiguration {
    domain: string;
    root?: string;
    onTransformBody?: TransformBodyDelegate;
    onInjectHeader?: InjectHeaderDelegate;
    onTransformResponse?: TransformResponseDelegate;
}
export declare class Api {
    readonly instance: axios.AxiosInstance;
    private readonly config;
    constructor(config: ApiConfiguration);
    request<RouteT extends Route<any>>(route: RouteT): Request<{
        route: RouteT;
    }>;
}
