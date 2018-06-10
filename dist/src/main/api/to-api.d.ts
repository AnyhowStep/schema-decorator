import { Route, Empty } from "./Route";
import { ApiConfiguration, Api } from "./Api";
import { Param } from "./Param";
import { Request } from "./Request";
export declare type RouteMap = {
    [routeName: string]: Route<any, any, any, any, any, any, any>;
};
export declare type ApiMixin<RouteMapT extends RouteMap> = (Api & {
    [routeName in keyof RouteMapT]: () => (RouteMapT[routeName] extends Route<infer RawParamT, infer ParamT, infer QueryT, infer BodyT, infer ResponseT, infer AccessTokenT, infer MethodLiteralT> ? (ParamT extends Param<RawParamT> ? Request<Empty, Empty, Empty, undefined, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT> : never) : never);
});
export declare type ApiMixinType<RouteMapT extends RouteMap> = {
    new (config: ApiConfiguration): (ApiMixin<RouteMapT>);
    readonly route: Readonly<RouteMapT>;
};
export declare type ApiInstance<ApiMixinTypeT extends ApiMixinType<any>> = (ApiMixinTypeT extends ApiMixinType<infer RouteMapT> ? ApiMixin<RouteMapT> : never);
export declare function toApi<RouteMapT extends RouteMap>(routeMap: RouteMapT): ApiMixinType<RouteMapT>;
