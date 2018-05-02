import { AccessTokenType } from "./AccessToken";
import { Assertion } from "../Assertion";
import { AssertDelegate } from "../AssertDelegate";
import { Param } from "./Param";
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
    getCallingPath(p: Param<T>): string;
}
export declare class Empty {
    _dummy?: undefined;
}
export declare type MethodLiteral = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "Contextual";
export interface RouteArgs<RawParamT, ParamT extends Empty | Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined, MethodT extends MethodLiteral> {
    readonly path: Path<RawParamT>;
    readonly paramT: Assertion<ParamT>;
    readonly queryT: Assertion<QueryT>;
    readonly bodyT: Assertion<BodyT>;
    readonly responseT: Assertion<ResponseT>;
    readonly _accessToken?: AccessTokenT;
    readonly method: MethodT;
}
export declare class Route<RawParamT, ParamT extends Empty | Param<RawParamT>, QueryT, BodyT, ResponseT, AccessTokenT extends AccessTokenType | undefined = undefined, MethodT extends MethodLiteral = "Contextual"> {
    static Create(): Route<{}, Empty, Empty, Empty, Empty, undefined, "Contextual">;
    readonly args: RouteArgs<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    private constructor();
    append(part: string): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    appendParam<P extends string>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, param: P, regex?: RegExp): Route<RawParamT & { [f in P]: string; }, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    param<P extends Param<RawParamT>>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: {
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
    paramDelegate<P extends Param<RawParamT>>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: AssertDelegate<P>): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    queryDelegate<Q>(queryT: AssertDelegate<Q>): Route<RawParamT, ParamT, Q, BodyT, ResponseT, AccessTokenT, MethodT>;
    bodyDelegate<B>(bodyT: AssertDelegate<B>): Route<RawParamT, ParamT, QueryT, B, ResponseT, AccessTokenT, MethodT>;
    responseDelegate<R>(responseT: AssertDelegate<R>): Route<RawParamT, ParamT, QueryT, BodyT, R, AccessTokenT, MethodT>;
    paramAssertion<P extends Param<RawParamT>>(assertion: Assertion<P>): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    queryAssertion<Q>(assertion: Assertion<Q>): Route<RawParamT, ParamT, Q, BodyT, ResponseT, AccessTokenT, MethodT>;
    bodyAssertion<B>(assertion: Assertion<B>): Route<RawParamT, ParamT, QueryT, B, ResponseT, AccessTokenT, MethodT>;
    responseAssertion<R>(assertion: Assertion<R>): Route<RawParamT, ParamT, QueryT, BodyT, R, AccessTokenT, MethodT>;
    requireAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenType, MethodT>;
    optionalAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenType | undefined, MethodT>;
    denyAccessToken(): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, undefined, MethodT>;
    method<M extends MethodLiteral>(method: M): Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, M>;
    getMethod(): "GET" | "POST" | MethodT;
    withoutParam(this: Route<RawParamT, ParamT, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>): Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    anyParam<P>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: {
        new (): P;
    }): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    anyParamDelegate<P>(this: Route<RawParamT, Empty, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>, paramT: AssertDelegate<P>): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
    anyParamAssertion<P>(assertion: Assertion<P>): Route<RawParamT, P, QueryT, BodyT, ResponseT, AccessTokenT, MethodT>;
}
