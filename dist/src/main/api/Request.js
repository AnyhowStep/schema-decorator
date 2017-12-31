"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./Route");
const AccessToken_1 = require("./AccessToken");
const convert = require("../convert");
class Request {
    constructor(args) {
        this.args = args;
    }
    static Create(api, route) {
        return new Request({
            param: new Route_1.Empty(),
            query: new Route_1.Empty(),
            body: new Route_1.Empty(),
            accessTokenType: undefined,
            route: route,
            api: api,
        });
    }
    setParam(n) {
        return new Request(Object.assign({}, this.args, { param: n }));
    }
    setQuery(n) {
        return new Request(Object.assign({}, this.args, { query: n }));
    }
    setBody(n) {
        return new Request(Object.assign({}, this.args, { body: n }));
    }
    setAccessToken(n) {
        return new Request(Object.assign({}, this.args, { accessTokenType: n }));
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const route = this.args.route;
            const r = route.args;
            const toRaw = (name, mixed, t, isCtor) => {
                if (isCtor) {
                    const ctor = t;
                    return convert.toRaw(name, convert.toClass(name, mixed, ctor));
                }
                else {
                    const d = t;
                    return d(name, mixed);
                }
            };
            const headers = {};
            const config = {
                method: route.getMethod(),
                url: r.path.getCallingPath(toRaw("param", this.args.param, r.paramT, r.paramIsCtor)),
                params: toRaw("query", this.args.query, r.queryT, r.queryIsCtor),
                data: (this.args.body instanceof Route_1.Empty) ?
                    undefined :
                    toRaw("body", this.args.body, r.bodyT, r.bodyIsCtor),
                headers: headers,
            };
            const accessTokenType = this.args.accessTokenType;
            if (accessTokenType != null) {
                const accessTokenString = yield AccessToken_1.AccessTokenUtil.GetAccessTokenString(accessTokenType);
                headers["Access-Token"] = accessTokenString;
            }
            const result = yield this.args.api.instance.request(config);
            if (r.responseT == Route_1.Empty) {
                return result;
            }
            else {
                if (r.responseIsCtor) {
                    const ctor = r.responseT;
                    result.data = convert.toClass("response", result.data, ctor);
                    return result;
                }
                else {
                    const d = r.responseT;
                    d("response", result.data);
                    return result;
                }
            }
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map