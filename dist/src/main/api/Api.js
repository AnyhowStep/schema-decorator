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
    }
    request(route) {
        return Request_1.Request.Create(this, route);
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map