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
            const toRaw = (name, mixed, t) => {
                if (t.isCtor) {
                    return convert.toRaw(name, convert.toClass(name, mixed, t.func));
                }
                else {
                    const v = t.func(name, mixed);
                    return convert.anyToRaw(name, v);
                }
            };
            const headers = {};
            const config = {
                method: route.getMethod(),
                url: r.path.getCallingPath(toRaw("param", this.args.param, r.paramT)),
                params: toRaw("query", this.args.query, r.queryT),
                data: (this.args.body instanceof Route_1.Empty) ?
                    undefined :
                    toRaw("body", this.args.body, r.bodyT),
                headers: headers,
            };
            const accessTokenType = this.args.accessTokenType;
            if (accessTokenType != null) {
                const accessTokenString = yield AccessToken_1.AccessTokenUtil.GetAccessTokenString(accessTokenType);
                headers["Access-Token"] = accessTokenString;
            }
            const result = yield this.args.api.instance.request(config);
            if (r.responseT.func == Route_1.Empty) {
                return result;
            }
            else {
                result.data = toRaw("response", result.data, r.responseT);
                return result;
            }
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map