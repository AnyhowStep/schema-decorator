import * as axios from "axios";
import { Route, RouteData } from "./Route";
import { Api } from "./Api";
import { ChainedAssertFunc, AcceptsOf, TypeOf, AssertFunc } from "../types";
export declare type TransformBodyDelegate = (rawBody: any | undefined) => any;
export declare type InjectHeaderDelegate = (route: Route<RouteData>) => any;
export declare type TransformResponseDelegate = (rawResponse: any) => any;
export interface RequestData {
    readonly route: Route<RouteData>;
    readonly param?: any;
    readonly query?: any;
    readonly body?: any;
    readonly header?: any;
}
export interface RequestExtraData {
    readonly api: Api;
    readonly onTransformBody?: TransformBodyDelegate;
    readonly onInjectHeader?: InjectHeaderDelegate;
    readonly onTransformResponse?: TransformResponseDelegate;
}
export declare class Request<DataT extends RequestData> {
    readonly data: DataT;
    readonly extraData: RequestExtraData;
    static Create<RouteT extends Route<any>>(api: Api, route: RouteT): (Request<{
        route: RouteT;
    }>);
    private constructor();
    setParam(this: (DataT extends {
        route: {
            data: {
                paramF: ChainedAssertFunc<any>;
            };
        };
    } ? ("param" extends keyof DataT ? never : Request<DataT>) : never), param: AcceptsOf<Exclude<DataT["route"]["data"]["paramF"], undefined>>): (Request<DataT & {
        param: TypeOf<Exclude<DataT["route"]["data"]["paramF"], undefined>>;
    }>);
    setQuery(this: (DataT extends {
        route: {
            data: {
                queryF: AssertFunc<any>;
            };
        };
    } ? ("query" extends keyof DataT ? never : Request<DataT>) : never), query: AcceptsOf<Exclude<DataT["route"]["data"]["queryF"], undefined>>): (Request<DataT & {
        query: TypeOf<Exclude<DataT["route"]["data"]["queryF"], undefined>>;
    }>);
    setBody(this: (DataT extends {
        route: {
            data: {
                bodyF: AssertFunc<any>;
            };
        };
    } ? ("body" extends keyof DataT ? never : Request<DataT>) : never), body: AcceptsOf<Exclude<DataT["route"]["data"]["bodyF"], undefined>>): (Request<DataT & {
        body: TypeOf<Exclude<DataT["route"]["data"]["bodyF"], undefined>>;
    }>);
    setHeader(this: (DataT extends {
        route: {
            data: {
                headerF: AssertFunc<any>;
            };
        };
    } ? ("header" extends keyof DataT ? never : Request<DataT>) : never), header: AcceptsOf<Exclude<DataT["route"]["data"]["headerF"], undefined>>): (Request<DataT & {
        header: TypeOf<Exclude<DataT["route"]["data"]["headerF"], undefined>>;
    }>);
    setOnTransformBody(onTransformBody: TransformBodyDelegate | undefined): (Request<DataT>);
    setOnInjectHeader(onInjectHeader: InjectHeaderDelegate | undefined): (Request<DataT>);
    setOnTransformResponse(onTransformResponse: TransformResponseDelegate | undefined): (Request<DataT>);
    send(this: ((("paramF" extends keyof DataT["route"]["data"] ? ("param" extends keyof DataT ? true : false) : true) | ("queryF" extends DataT["route"]["data"] ? ("query" extends keyof DataT ? true : false) : true) | ("bodyF" extends DataT["route"]["data"] ? ("body" extends keyof DataT ? true : false) : true) | ("headerF" extends DataT["route"]["data"] ? ("header" extends keyof DataT ? true : false) : true)) extends true ? Request<DataT> : never)): (Promise<axios.AxiosResponse<"responseF" extends keyof DataT["route"]["data"] ? TypeOf<Exclude<DataT["route"]["data"]["responseF"], undefined>> : unknown>>);
}
