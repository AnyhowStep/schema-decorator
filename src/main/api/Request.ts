import * as axios from "axios";
import {Route, MethodLiteral, Empty} from "./Route";
import {Api} from "./Api";
import {AccessTokenType, AccessTokenUtil} from "./AccessToken";
import * as convert from "../convert";
import {Assertion} from "../Assertion";

export interface RequestArgs<P, Q, B, A,
    RawParamT,
    ParamT extends { [k in keyof RawParamT] : boolean|number|string },
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined
> {
    readonly param : P,
    readonly query : Q,
    readonly body  : B,
    readonly accessTokenType : A,

    readonly route : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodLiteral
    >,
    readonly api : Api;
}
export class Request<P, Q, B, A,
    RawParamT,
    ParamT extends { [k in keyof RawParamT] : boolean|number|string },
    QueryT,
    BodyT,
    ResponseT,
    AccessTokenT extends AccessTokenType|undefined
> {
    public static Create<
        RawParamT,
        ParamT extends { [k in keyof RawParamT] : boolean|number|string },
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT extends AccessTokenType|undefined
    > (api : Api, route : Route<
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT,
        MethodLiteral
    >) : Request<Empty, Empty, Empty, undefined,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        return new Request({
            param : new Empty(),
            query : new Empty(),
            body  : new Empty(),
            accessTokenType  : undefined,
            route : route,
            api   : api,
        });
    }
    public readonly args : RequestArgs<P, Q, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >;
    private constructor (args : RequestArgs<P, Q, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >) {
        this.args = args;
    }
    public setParam<NewT extends ParamT> (this : Request<Empty, Q, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >, n : NewT) : Request<NewT, Q, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        return new Request({
            ...this.args,
            param : n,
        });
    }
    public setQuery<NewT extends QueryT> (this : Request<P, Empty, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >, n : NewT) : Request<P, NewT, B, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        return new Request({
            ...this.args,
            query : n,
        });
    }
    public setBody<NewT extends BodyT> (this : Request<P, Q, Empty, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >, n : NewT) : Request<P, Q, NewT, A,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        return new Request({
            ...this.args,
            body : n,
        });
    }
    public setAccessToken<NewT extends AccessTokenT> (this : Request<P, Q, B, undefined,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >, n : NewT) : Request<P, Q, B, NewT,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    > {
        return new Request({
            ...this.args,
            accessTokenType : n,
        });
    }
    public async send (this : Request<ParamT, QueryT, BodyT, AccessTokenT,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        Empty, /*ResponseT*/
        AccessTokenT
    >) : Promise<axios.AxiosResponse<any>>;
    public async send (this : Request<ParamT, QueryT, BodyT, AccessTokenT,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >) : Promise<axios.AxiosResponse<ResponseT>>;
    public async send (this : Request<ParamT, QueryT, BodyT, AccessTokenT,
        RawParamT,
        ParamT,
        QueryT,
        BodyT,
        ResponseT,
        AccessTokenT
    >) : Promise<axios.AxiosResponse<any>> {
        const route = this.args.route;
        const r = route.args;

        const toRaw = <T>(name : string, mixed : any, t : Assertion<T>) => {
            if (t.isCtor) {
                return convert.toRaw(name, convert.toClass(name, mixed, t.func));
            } else {
                const v = t.func(name, mixed);
                return convert.anyToRaw(name, v);
            }
        };

        const headers : {
            [key : string] : string|string[]
        } = {};
        const config : axios.AxiosRequestConfig = {
            method : route.getMethod(),
            url : r.path.getCallingPath(toRaw("param", this.args.param, r.paramT)),
            params : toRaw("query", this.args.query, r.queryT),
            data : (this.args.body instanceof Empty) ?
                undefined :
                toRaw("body", this.args.body, r.bodyT),
            headers : headers,
        };
        const accessTokenType : AccessTokenType|undefined = this.args.accessTokenType;
        if (accessTokenType != null) {
            const accessTokenString = await AccessTokenUtil.GetAccessTokenString(accessTokenType);
            headers["Access-Token"] = accessTokenString;
        }
        const result = await this.args.api.instance.request(config);
        if (r.responseT.func == Empty) {
            return result;
        } else {
            result.data = toRaw("response", result.data, r.responseT);
            return result;
        }
    }
}
