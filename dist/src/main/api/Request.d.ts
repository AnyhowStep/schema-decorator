import * as axios from "axios";
import { Route, MethodLiteral, Empty } from "./Route";
import { Api } from "./Api";
import { AccessTokenType } from "./AccessToken";
import { Param } from "./Param";
export declare type TransformBodyDelegate = (rawBody: any) => any;
export interface RequestArgs<P, Q, B, A, RawParamT, ParamT extends Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined> {
    readonly param: P;
    readonly query: Q;
    readonly body: B;
    readonly accessTokenType: A;
    readonly headers: {
        [key: string]: undefined | string | string[];
    };
    readonly onTransformBody?: TransformBodyDelegate;
    readonly route: Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodLiteral>;
    readonly api: Api;
}
export declare class Request<P, Q, B, A, RawParamT, ParamT extends Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined> {
    static Create<RawParamT, ParamT extends Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined>(api: Api, route: Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodLiteral>): Request<Empty, Empty, Empty, undefined, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    readonly args: RequestArgs<P, Q, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    private constructor();
    setParam<NewT extends ParamT>(this: Request<Empty, Q, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>, n: NewT): Request<NewT, Q, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    setQuery<NewT extends QueryT>(this: Request<P, Empty, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>, n: NewT): Request<P, NewT, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    setBody<NewT extends BodyT>(this: Request<P, Q, Empty, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>, n: NewT): Request<P, Q, NewT, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    setAccessToken<NewT extends AccessTokenT>(this: Request<P, Q, B, undefined, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>, n: NewT): Request<P, Q, B, NewT, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    setHeader(key: string, value: undefined | string | (string[])): Request<P, Q, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    setOnTransformBody(onTransformBody: TransformBodyDelegate): Request<P, Q, B, A, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>;
    send(this: Request<ParamT, QueryT, BodyT, AccessTokenT, RawParamT, ParamT, QueryT, BodyT, Empty, AccessTokenT>): Promise<axios.AxiosResponse<any>>;
    send(this: Request<ParamT, QueryT, BodyT, AccessTokenT, RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT>): Promise<axios.AxiosResponse<ResponseT>>;
}
