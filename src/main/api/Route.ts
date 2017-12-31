import {AssertDelegate} from "../assert";
import {AccessTokenType} from "./AccessToken";

export interface PathParam<T> {
    param  : keyof T,
    regex? : RegExp,
}
export class Path<T = {}> {
    private arr : (string|PathParam<T>)[];
    private readonly str : string;
    private readonly _dummyT? : T;
    public constructor (arr : (string|PathParam<T>)[] = [], str : string = "") {
        this.arr = arr;
        this.str = str;
        this._dummyT;
    }

    public append (part : string) : Path<T> {
        if (part.length == 0) {
            throw new Error(`part cannot be an empty string`);
        }
        if (part.indexOf(":") >= 0) {
            throw new Error(`":" not allowed in part, ${part}`);
        }
        if (part[0] != "/") {
            throw new Error(`part must start with "/", ${part}`);
        }
        if (part.length > 1 && part[part.length-1] == "/") {
            throw new Error(`part must not end with "/", ${part}`);
        }

        const arr = this.arr.slice();
        arr.push(part);
        return new Path(
            arr,
            this.str + part
        );
    }
    //regex, if provided, ignores modifiers like `g` and `i`
    public appendParam<P extends string> (param : P, regex? : RegExp) : Path<T & { [f in P] : string }> {
        if (param.indexOf(":") >= 0) {
            throw new Error(`":" not allowed in part, ${param}`);
        }
        if (param.indexOf("/") >= 0) {
            throw new Error(`"/" not allowed in part, ${param}`);
        }
        let newStr = this.str + "/:" + param;
        if (regex != null) {
            newStr += `(${regex.source})`;
        }
        const arr : (string|PathParam<T & { [f in P] : string }>)[] = this.arr.slice();
        const newParam : PathParam<{ [f in P] : string }> = {
            param : param,
            regex : regex,
        };
        arr.push(newParam);
        return new Path<T & { [f in P] : string }>(
            arr,
            newStr
        );
    }
    public getRouterPath () : string {
        return this.str;
    }
    public getCallingPath (p : { [k in keyof T] : boolean|number|string }) : string {
        let result = "";
        for (let i of this.arr) {
            if (typeof i == "string") {
                result += i;
            } else {
                const raw : boolean|number|string = p[i.param];
                const value = raw.toString();
                if (i.regex != null) {
                    if (!new RegExp(`^${i.regex.source}$`).test(value)) {
                        throw new Error(`Invalid value for ${i.param}, received ${value}; expected /^${i.regex.source}$/`);
                    }
                }
                result += `/${encodeURIComponent(value)}`;
            }
        }
        return result;
    }
}

export class Empty {
    _dummy? : undefined;
}

export type MethodLiteral = "GET"|"POST"|"PUT"|"DELETE"|"PATCH"|"HEAD"|"OPTIONS"|"CONNECT"|"Contextual";

export interface RouteArgs<
    RawParamT,
    ParamT extends Empty|{ [k in keyof RawParamT] : boolean|number|string },
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined,
    MethodT extends MethodLiteral
> {
    readonly path : Path<RawParamT>,
    readonly paramT : {new():ParamT}|AssertDelegate<ParamT>,
    readonly queryT : {new():QueryT}|AssertDelegate<QueryT>,
    readonly bodyT : {new():BodyT}|AssertDelegate<BodyT>,
    readonly responseT : {new():ResponseT}|AssertDelegate<ResponseT>,

    readonly _accessToken? : AccessTokenT,
    readonly method : MethodT,

    readonly paramIsCtor : boolean;
    readonly queryIsCtor : boolean;
    readonly bodyIsCtor : boolean;
    readonly responseIsCtor : boolean;
};

export class Route<
    RawParamT,
    ParamT extends Empty|{ [k in keyof RawParamT] : boolean|number|string },
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined=undefined,
    MethodT extends MethodLiteral="Contextual"
> {
    public static Create () {
        return new Route({
            path : new Path<{}>(),

            paramT : Empty,
            queryT : Empty,
            bodyT : Empty,
            responseT : Empty,

            method : "Contextual",

            paramIsCtor : true,
            queryIsCtor : true,
            bodyIsCtor : true,
            responseIsCtor : true,
        });
    }
    public readonly args : RouteArgs<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >;

    private constructor (args : RouteArgs<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >) {
        this.args = {
            ...args
        };
    }

    public append (this : Route<
        RawParamT,
        Empty, /*ParamT*/
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >, part : string) {
        return new Route({
            ...this.args,
            path : this.args.path.append(part),
        });
    }
    public appendParam<P extends string> (this : Route<
        RawParamT,
        Empty, /*ParamT*/
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >, param : P, regex? : RegExp) {
        return new Route({
            ...this.args,
            path : this.args.path.appendParam(param, regex),
        });
    }
    public param<P extends { [k in keyof RawParamT] : boolean|number|string }> (this : Route<
        RawParamT,
        Empty, /*ParamT*/
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >, paramT : {new():P}) {
        return new Route({
            ...this.args,
            paramT : paramT,
            paramIsCtor : true,
        });
    }
    public query<Q> (queryT : {new():Q}) {
        return new Route({
            ...this.args,
            queryT : queryT,
            queryIsCtor : true,
        });
    }
    public body<B> (bodyT : {new():B}) {
        return new Route({
            ...this.args,
            bodyT : bodyT,
            bodyIsCtor : true,
        });
    }
    public response<R> (responseT : {new():R}) {
        return new Route({
            ...this.args,
            responseT : responseT,
            responseIsCtor : true,
        });
    }
    public paramDelegate<P extends RawParamT> (this : Route<
        RawParamT,
        Empty, /*ParamT*/
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodT
    >, paramT : AssertDelegate<P>) {
        return new Route({
            ...this.args,
            paramT : paramT,
            paramIsCtor : false,
        });
    }
    public queryDelegate<Q> (queryT : AssertDelegate<Q>) {
        return new Route({
            ...this.args,
            queryT : queryT,
            queryIsCtor : false,
        });
    }
    public bodyDelegate<B> (bodyT : AssertDelegate<B>) {
        return new Route({
            ...this.args,
            bodyT : bodyT,
            bodyIsCtor : false,
        });
    }
    public responseDelegate<R> (responseT : AssertDelegate<R>) {
        return new Route({
            ...this.args,
            responseT : responseT,
            responseIsCtor : false,
        });
    }
    public requireAccessToken () : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenType,
        MethodT
    > {
        return new Route({
            ...this.args,
        }) as any;
    }
    public optionalAccessToken () : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenType|undefined,
        MethodT
    > {
        return new Route({
            ...this.args,
        });
    }
    public denyAccessToken () : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        undefined,
        MethodT
    > {
        return new Route({
            ...this.args,
        }) as any;
    }
    public method (method : MethodLiteral) {
        return new Route({
            ...this.args,
            method : method,
        });
    }
    public getMethod () {
        if (this.args.method == "Contextual") {
            if (this.args.bodyT == Empty) {
                return "GET";
            } else {
                return "POST";
            }
        } else {
            return this.args.method;
        }
    }
}
