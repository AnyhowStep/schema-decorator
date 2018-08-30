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
const types_1 = require("../types");
class Request {
    constructor(data, extraData) {
        this.data = data;
        this.extraData = extraData;
    }
    static Create(api, route) {
        return new Request({
            route: route,
        }, {
            api: api,
        });
    }
    setParam(param) {
        const d = types_1.toAssertDelegateExact(this.data.route.data.paramF);
        d("param", param);
        return new Request(Object.assign({}, this.data, { param: param }), this.extraData);
    }
    setQuery(query) {
        const d = types_1.toAssertDelegateExact(this.data.route.data.queryF);
        d("query", query);
        return new Request(Object.assign({}, this.data, { query: query }), this.extraData);
    }
    setBody(body) {
        const d = types_1.toAssertDelegateExact(this.data.route.data.bodyF);
        d("body", body);
        return new Request(Object.assign({}, this.data, { body: body }), this.extraData);
    }
    //Special, does not eliminate extra header keys,
    //But does not check their values, either
    setHeader(header) {
        const d = types_1.toAssertDelegateExact(this.data.route.data.headerF);
        d("header", header);
        return new Request(Object.assign({}, this.data, { header: header }), this.extraData);
    }
    setOnTransformBody(onTransformBody) {
        return new Request(this.data, Object.assign({}, this.extraData, { onTransformBody: onTransformBody }));
    }
    setOnInjectHeader(onInjectHeader) {
        return new Request(this.data, Object.assign({}, this.extraData, { onInjectHeader: onInjectHeader }));
    }
    setOnTransformResponse(onTransformResponse) {
        return new Request(this.data, Object.assign({}, this.extraData, { onTransformResponse: onTransformResponse }));
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.data;
            const routeData = data.route.data;
            const extraData = this.extraData;
            const param = (routeData.paramF == undefined) ?
                {} :
                types_1.toAssertDelegateExact(routeData.paramF)(`${routeData.path.getRouterPath()} : param`, data.param);
            const method = data.route.getMethod();
            const path = routeData.path.getCallingPath(param);
            let debugName = `${method} ${path}`;
            const query = (routeData.queryF == undefined) ?
                undefined :
                types_1.toAssertDelegateExact(routeData.queryF)(`${debugName} : query`, data.query);
            if (query != undefined && Object.keys(query).length > 0) {
                debugName += `?${JSON.stringify(query)}`;
            }
            const body = (routeData.bodyF == undefined) ?
                undefined :
                types_1.toAssertDelegateExact(routeData.bodyF)(`${debugName} : body`, data.body);
            //Headers are special
            const injectedHeader = (extraData.onInjectHeader == undefined) ?
                {} :
                yield extraData.onInjectHeader(data.route);
            const header = (routeData.headerF == undefined) ?
                injectedHeader : Object.assign({}, injectedHeader, data.header, types_1.toAssertDelegateExact(routeData.headerF)(`${debugName} : header`, data.header));
            const transformedBody = (extraData.onTransformBody == undefined) ?
                body :
                yield extraData.onTransformBody(body);
            const config = {
                method: method,
                url: path,
                params: query,
                data: transformedBody,
                headers: header,
            };
            const result = yield this.extraData.api.instance.request(config);
            if (routeData.responseF == undefined) {
                return result;
            }
            else {
                const rawResponse = (extraData.onTransformResponse == undefined) ?
                    result.data :
                    yield extraData.onTransformResponse(result.data);
                const response = types_1.toAssertDelegateExact(routeData.responseF)(`${debugName} : response`, rawResponse);
                result.data = response;
                return result;
            }
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map