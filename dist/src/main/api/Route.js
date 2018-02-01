"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Path {
    constructor(arr = [], str = "") {
        this.arr = arr;
        this.str = str;
        this._dummyT;
    }
    append(part) {
        if (part.length == 0) {
            //No change, return a copy, anyway
            return new Path([...this.arr], this.str);
        }
        if (part.indexOf(":") >= 0) {
            throw new Error(`":" not allowed in part, ${part}`);
        }
        if (part[0] != "/") {
            throw new Error(`part must start with "/", ${part}`);
        }
        if (part.length > 1 && part[part.length - 1] == "/") {
            throw new Error(`part must not end with "/", ${part}`);
        }
        const arr = this.arr.slice();
        arr.push(part);
        return new Path(arr, this.str + part);
    }
    //regex, if provided, ignores modifiers like `g` and `i`
    appendParam(param, regex) {
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
        const arr = this.arr.slice();
        const newParam = {
            param: param,
            regex: regex,
        };
        arr.push(newParam);
        return new Path(arr, newStr);
    }
    getRouterPath() {
        return this.str;
    }
    getCallingPath(p) {
        let result = "";
        for (let i of this.arr) {
            if (typeof i == "string") {
                result += i;
            }
            else {
                const raw = p[i.param];
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
exports.Path = Path;
class Empty {
}
exports.Empty = Empty;
;
class Route {
    constructor(args) {
        this.args = Object.assign({}, args);
    }
    static Create() {
        return new Route({
            path: new Path(),
            paramT: {
                isCtor: true,
                func: Empty,
            },
            queryT: {
                isCtor: true,
                func: Empty,
            },
            bodyT: {
                isCtor: true,
                func: Empty,
            },
            responseT: {
                isCtor: true,
                func: Empty,
            },
            method: "Contextual",
        });
    }
    append(part) {
        return new Route(Object.assign({}, this.args, { path: this.args.path.append(part) }));
    }
    appendParam(param, regex) {
        return new Route(Object.assign({}, this.args, { path: this.args.path.appendParam(param, regex) }));
    }
    param(paramT) {
        return new Route(Object.assign({}, this.args, { paramT: {
                isCtor: true,
                func: paramT,
            } }));
    }
    query(queryT) {
        return new Route(Object.assign({}, this.args, { queryT: {
                isCtor: true,
                func: queryT,
            } }));
    }
    body(bodyT) {
        return new Route(Object.assign({}, this.args, { bodyT: {
                isCtor: true,
                func: bodyT,
            } }));
    }
    response(responseT) {
        return new Route(Object.assign({}, this.args, { responseT: {
                isCtor: true,
                func: responseT,
            } }));
    }
    paramDelegate(paramT) {
        return new Route(Object.assign({}, this.args, { paramT: {
                isCtor: false,
                func: paramT,
            } }));
    }
    queryDelegate(queryT) {
        return new Route(Object.assign({}, this.args, { queryT: {
                isCtor: false,
                func: queryT,
            } }));
    }
    bodyDelegate(bodyT) {
        return new Route(Object.assign({}, this.args, { bodyT: {
                isCtor: false,
                func: bodyT,
            } }));
    }
    responseDelegate(responseT) {
        return new Route(Object.assign({}, this.args, { responseT: {
                isCtor: false,
                func: responseT,
            } }));
    }
    paramAssertion(assertion) {
        return new Route(Object.assign({}, this.args, { paramT: assertion }));
    }
    queryAssertion(assertion) {
        return new Route(Object.assign({}, this.args, { queryT: assertion }));
    }
    bodyAssertion(assertion) {
        return new Route(Object.assign({}, this.args, { bodyT: assertion }));
    }
    responseAssertion(assertion) {
        return new Route(Object.assign({}, this.args, { responseT: assertion }));
    }
    requireAccessToken() {
        return new Route(Object.assign({}, this.args));
    }
    optionalAccessToken() {
        return new Route(Object.assign({}, this.args));
    }
    denyAccessToken() {
        return new Route(Object.assign({}, this.args));
    }
    method(method) {
        return new Route(Object.assign({}, this.args, { method: method }));
    }
    getMethod() {
        if (this.args.method == "Contextual") {
            if (this.args.bodyT.func == Empty) {
                return "GET";
            }
            else {
                return "POST";
            }
        }
        else {
            return this.args.method;
        }
    }
}
exports.Route = Route;
//# sourceMappingURL=Route.js.map