import {AccessTokenType} from "./AccessToken";
import {Assertion} from "../Assertion";
import {AssertDelegate} from "../AssertDelegate";
import {Param, ParamValue} from "./Param";

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
    public getCallingPath (p : Param<T>) : string {
        let result = "";
        for (let i of this.arr) {
            if (typeof i == "string") {
                result += i;
            } else {
                const raw : ParamValue = p[i.param];
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
    ParamT extends Empty|Param<RawParamT>,
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined,
    MethodT extends MethodLiteral
> {
    readonly path : Path<RawParamT>,
    readonly paramT : Assertion<ParamT>,
    readonly queryT : Assertion<QueryT>,
    readonly bodyT  : Assertion<BodyT>,
    readonly responseT : Assertion<ResponseT>,

    readonly _accessToken? : AccessTokenT,
    readonly method : MethodT,
};

export class Route<
    RawParamT,
    ParamT extends Empty|Param<RawParamT>,
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined=undefined,
    MethodT extends MethodLiteral="Contextual"
> {
    public static Create () {
        return new Route({
            path : new Path<{}>(),

            paramT : {
                isCtor : true,
                func   : Empty,
            },
            queryT : {
                isCtor : true,
                func   : Empty,
            },
            bodyT : {
                isCtor : true,
                func   : Empty,
            },
            responseT : {
                isCtor : true,
                func   : Empty,
            },

            method : "Contextual",
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
    public param<P extends Param<RawParamT>> (this : Route<
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
            paramT : {
                isCtor : true,
                func   : paramT,
            },
        });
    }
    public query<Q> (queryT : {new():Q}) {
        return new Route({
            ...this.args,
            queryT : {
                isCtor : true,
                func   : queryT,
            },
        });
    }
    public body<B> (bodyT : {new():B}) {
        return new Route({
            ...this.args,
            bodyT : {
                isCtor : true,
                func   : bodyT,
            },
        });
    }
    public response<R> (responseT : {new():R}) {
        return new Route({
            ...this.args,
            responseT : {
                isCtor : true,
                func   : responseT,
            },
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
            paramT : {
                isCtor : false,
                func   : paramT,
            },
        });
    }
    public queryDelegate<Q> (queryT : AssertDelegate<Q>) {
        return new Route({
            ...this.args,
            queryT : {
                isCtor : false,
                func   : queryT,
            },
        });
    }
    public bodyDelegate<B> (bodyT : AssertDelegate<B>) {
        return new Route({
            ...this.args,
            bodyT : {
                isCtor : false,
                func   : bodyT,
            },
        });
    }
    public responseDelegate<R> (responseT : AssertDelegate<R>) {
        return new Route({
            ...this.args,
            responseT : {
                isCtor : false,
                func   : responseT,
            },
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
    public method<M extends MethodLiteral> (method : M) {
        return new Route({
            ...this.args,
            method : method,
        });
    }
    public getMethod () {
        if (this.args.method == "Contextual") {
            if (this.args.bodyT.func == Empty) {
                return "GET";
            } else {
                return "POST";
            }
        } else {
            return this.args.method;
        }
    }
}
