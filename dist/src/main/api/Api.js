"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const Request_1 = require("./Request");
class Api {
    constructor(config) {
        const root = (config.root != null) ?
            config.root : "";
        this.instance = axios.default.create({
            baseURL: `${config.domain}${root}`,
            responseType: "json"
        });
        this.config = config;
    }
    request(route) {
        let result = Request_1.Request.Create(this, route);
        if (this.config.onInjectHeaders != undefined) {
            const headers = this.config.onInjectHeaders(route);
            for (let k in headers) {
                if (headers.hasOwnProperty(k)) {
                    result = result.setHeader(k, headers[k]);
                }
            }
        }
        return result;
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map