import * as axios from "axios";
import {Route, RouteData} from "./Route";
import {Api} from "./Api";
import {
    ChainedAssertFunc,
    AcceptsOf,
    TypeOf,
    toAssertDelegateExact,
    AssertFunc
} from "../types";

export type TransformBodyDelegate = (rawBody : any|undefined) => any;
export type InjectHeaderDelegate  = (route : Route<RouteData>) => any;
export type TransformResponseDelegate = (rawResponse : any) => any;

export interface RequestData {
    readonly route : Route<RouteData>;

    readonly param?  : any;
    readonly query?  : any;
    readonly body?   : any;
    readonly header? : any;
}
export interface RequestExtraData {
    readonly api : Api;
    readonly onTransformBody? : TransformBodyDelegate;
    readonly onInjectHeader?  : InjectHeaderDelegate;
    readonly onTransformResponse? : TransformResponseDelegate;
}

export class Request<DataT extends RequestData> {
    public static Create<RouteT extends Route<any>> (
        api : Api,
        route : RouteT
    ) : (
        Request<{
            route : RouteT,
        }>
    ) {
        return new Request(
            {
                route : route,
            },
            {
                api   : api,
            }
        );
    }
    private constructor (
        public readonly data : DataT,
        public readonly extraData : RequestExtraData,
    ) {
    }
    public setParam (
        this : (
            DataT extends {
                route : {
                    data : {
                        paramF : ChainedAssertFunc<any>
                    }
                },
            } ?
                (
                    "param" extends keyof DataT ?
                        never :
                        Request<DataT>
                ) :
                never
        ),
        param : AcceptsOf<Exclude<
            DataT["route"]["data"]["paramF"],
            undefined
        >>
    ) : (
        Request<
            DataT &
            {
                param : TypeOf<Exclude<
                    DataT["route"]["data"]["paramF"],
                    undefined
                >>
            }
        >
    ) {
        const d = toAssertDelegateExact(this.data.route.data.paramF);
        return new Request(
            {
                ...(this.data as any),
                param : d("param", param),
            },
            this.extraData
        );
    }
    public setQuery (
        this : (
            DataT extends {
                route : {
                    data : {
                        queryF : AssertFunc<any>
                    }
                },
            } ?
                (
                    "query" extends keyof DataT ?
                        never :
                        Request<DataT>
                ) :
                never
        ),
        query : AcceptsOf<Exclude<
            DataT["route"]["data"]["queryF"],
            undefined
        >>
    ) : (
        Request<
            DataT &
            {
                query : TypeOf<Exclude<
                    DataT["route"]["data"]["queryF"],
                    undefined
                >>
            }
        >
    ) {
        const d = toAssertDelegateExact(this.data.route.data.queryF);
        return new Request(
            {
                ...(this.data as any),
                query : d("query", query),
            },
            this.extraData
        );
    }
    public setBody (
        this : (
            DataT extends {
                route : {
                    data : {
                        bodyF : AssertFunc<any>
                    }
                },
            } ?
                (
                    "body" extends keyof DataT ?
                        never :
                        Request<DataT>
                ) :
                never
        ),
        body : AcceptsOf<Exclude<
            DataT["route"]["data"]["bodyF"],
            undefined
        >>
    ) : (
        Request<
            DataT &
            {
                body : TypeOf<Exclude<
                    DataT["route"]["data"]["bodyF"],
                    undefined
                >>
            }
        >
    ) {
        const d = toAssertDelegateExact(this.data.route.data.bodyF);
        return new Request(
            {
                ...(this.data as any),
                body : d("body", body),
            },
            this.extraData
        );
    }
    //Special, does not eliminate extra header keys,
    //But does not check their values, either
    public setHeader (
        this : (
            DataT extends {
                route : {
                    data : {
                        headerF : AssertFunc<any>
                    }
                },
            } ?
                (
                    "header" extends keyof DataT ?
                        never :
                        Request<DataT>
                ) :
                never
        ),
        header : AcceptsOf<Exclude<
            DataT["route"]["data"]["headerF"],
            undefined
        >>
    ) : (
        Request<
            DataT &
            {
                header : TypeOf<Exclude<
                    DataT["route"]["data"]["headerF"],
                    undefined
                >>
            }
        >
    ) {
        const d = toAssertDelegateExact(this.data.route.data.headerF);
        return new Request(
            {
                ...(this.data as any),
                header : {
                    ...(header as any),
                    ...d("header", header),
                },
            },
            this.extraData
        );
    }
    public setOnTransformBody (onTransformBody : TransformBodyDelegate|undefined) : (
        Request<DataT>
    ) {
        return new Request(
            this.data,
            {
                ...(this.extraData as any),
                onTransformBody : onTransformBody,
            },
        );
    }
    public setOnInjectHeader (onInjectHeader : InjectHeaderDelegate|undefined) : (
        Request<DataT>
    ) {
        return new Request(
            this.data,
            {
                ...(this.extraData as any),
                onInjectHeader : onInjectHeader,
            }
        );
    }
    public setOnTransformResponse (onTransformResponse : TransformResponseDelegate|undefined) : (
        Request<DataT>
    ) {
        return new Request(
            this.data,
            {
                ...(this.extraData as any),
                onTransformResponse : onTransformResponse,
            }
        );
    }
    public async send (
        this : (
            (
                (
                    "paramF" extends keyof DataT["route"]["data"] ?
                        (
                            "param" extends keyof DataT ?
                                true :
                                false
                        ) :
                        true
                ) |
                (
                    "queryF" extends DataT["route"]["data"] ?
                        (
                            "query" extends keyof DataT ?
                                true :
                                false
                        ) :
                        true
                ) |
                (
                    "bodyF" extends DataT["route"]["data"] ?
                        (
                            "body" extends keyof DataT ?
                                true :
                                false
                        ) :
                        true
                ) |
                (
                    "headerF" extends DataT["route"]["data"] ?
                        (
                            "header" extends keyof DataT ?
                                true :
                                false
                        ) :
                        true
                )
            ) extends true ?
                Request<DataT> :
                never
        )
    ) : (
        Promise<axios.AxiosResponse<
            "responseF" extends keyof DataT["route"]["data"] ?
                TypeOf<Exclude<
                    DataT["route"]["data"]["responseF"],
                    undefined
                >> :
                unknown
        >>

    ) {
        const data = this.data;
        const routeData = data.route.data;
        const extraData = this.extraData;

        const param = (routeData.paramF == undefined) ?
            {} :
            toAssertDelegateExact(routeData.paramF)(
                `${routeData.path.getRouterPath()} : param`,
                data.param
            );
        const method = data.route.getMethod();
        const path = routeData.path.getCallingPath(param);

        let debugName = `${method} ${path}`;

        const query = (routeData.queryF == undefined) ?
            undefined :
            toAssertDelegateExact(routeData.queryF)(
                `${debugName} : query`,
                data.query
            );

        if (query != undefined && Object.keys(query).length > 0) {
            debugName += `?${JSON.stringify(query)}`;
        }
        const body = (routeData.bodyF == undefined) ?
            undefined :
            toAssertDelegateExact(routeData.bodyF)(
                `${debugName} : body`,
                data.body
            );
        //Headers are special
        const injectedHeader = (extraData.onInjectHeader == undefined) ?
            {} :
            await extraData.onInjectHeader(data.route);
        const header = (routeData.headerF == undefined) ?
            injectedHeader :
            {
                //Injected headers are applied first,
                //and may be over-written
                ...injectedHeader,
                //There may be extra header values given
                //that are not asserted
                ...data.header,
                //This assert delegate possibly modifies the values
                //of the header
                ...toAssertDelegateExact(routeData.headerF)(
                    `${debugName} : header`,
                    data.header
                ),
            };

        const transformedBody = (extraData.onTransformBody == undefined) ?
            body :
            await extraData.onTransformBody(body);

        const config : axios.AxiosRequestConfig = {
            method : method,
            url : path,
            params : query,
            data : transformedBody,
            headers : header,
        };
        const result = await this.extraData.api.instance.request(config);

        if (routeData.responseF == undefined) {
            return result;
        } else {
            const rawResponse = (extraData.onTransformResponse == undefined) ?
                result.data :
                await extraData.onTransformResponse(result.data);
            const response = toAssertDelegateExact(routeData.responseF)(
                `${debugName} : response`,
                rawResponse
            );
            result.data = response;
            return result;
        }
    }
}
