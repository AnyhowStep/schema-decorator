import { AssertDelegate } from "../assert";
import { AccessTokenType } from "./AccessToken";
export interface PathParam<T> {
    param: keyof T;
    regex?: RegExp;
}
export declare class Path<T = {}> {
    private arr;
    private readonly str;
    private readonly _dummyT?;
    constructor(arr?: (string | PathParam<T>)[], str?: string);
    append(part: string): Path<T>;
    appendParam<P extends string>(param: P, regex?: RegExp): Path<T & {
        [f in P]: string;
    }>;
    getRouterPath(): string;
    getCallingPath(p: {
        [k in keyof T]: boolean | number | string;
    }): string;
}
export declare class Empty {
    _dummy?: undefined;
}
export declare type MethodLiteral = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "Contextual";
export interface RouteArgs<RawParamT, ParamT extends Empty | {
    [k in keyof RawParamT]: boolean | number | string;
}, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined, MethodT extends MethodLiteral> {
    readonly path: Path<RawParamT>;
    readonly paramT: {
        new (): ParamT;
    } | AssertDelegate<ParamT>;
    readonly queryT: {
        new (): QueryT;
    } | AssertDelegate<QueryT>;
    readonly bodyT: {
        new (): BodyT;
    } | AssertDelegate<BodyT>;
    readonly responseT: {
        new (): ResponseT;
    } | AssertDelegate<ResponseT>;
    readonly _accessToken?: AccessTokenT;
    readonly method: MethodT;
    readonly paramIsCtor: boolean;
    readonly queryIsCtor: boolean;
    readonly bodyIsCtor: boolean;
    readonly responseIsCtor: boolean;
}
export declare class Route<RawParamT, ParamT extends Empty | {
    [k in keyof RawParamT]: boolean | number | string;
}, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined = undefined, MethodT extends MethodLiteral = "Contextual"> {
    static Create(): Route<{}, Empty, Empty, Empty, Empty, undefined, "Contextual">;
    readonly args: RouteArgs<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    private constructor();
    append(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, part: string): Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    appendParam<P extends string>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, param: P, regex?: RegExp): Route<RawParamT & {
        [f in P]: string;
    }, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    param<P extends {
        [k in keyof RawParamT]: boolean | number | string;
    }>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: {
        new (): P;
    }): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    query<Q>(queryT: {
        new (): Q;
    }): Route<RawParamT, ParamT, Q, BodyT, ResponseT, AccessTokenT, MethodT>;
    body<B>(bodyT: {
        new (): B;
    }): Route<RawParamT, ParamT, QueryT, B, ResponseT, AccessTokenT, MethodT>;
    response<R>(responseT: {
        new (): R;
    }): Route<RawParamT, ParamT, QueryT, BodyT, R, AccessTokenT, MethodT>;
    paramDelegate<P extends RawParamT>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: AssertDelegate<P>): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    queryDelegate<Q>(queryT: AssertDelegate<Q>): Route<RawParamT, ParamT, Q, BodyT, ResponseT, AccessTokenT, MethodT>;
    bodyDelegate<B>(bodyT: AssertDelegate<B>): Route<RawParamT, ParamT, QueryT, B, ResponseT, AccessTokenT, MethodT>;
    responseDelegate<R>(responseT: AssertDelegate<R>): Route<RawParamT, ParamT, QueryT, BodyT, R, AccessTokenT, MethodT>;
    requireAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenType, MethodT>;
    optionalAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenType | undefined, MethodT>;
    denyAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, undefined, MethodT>;
    method(method: MethodLiteral): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodLiteral>;
    getMethod(): "GET" | "POST" | MethodT;
}
