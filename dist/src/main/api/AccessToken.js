"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessTokenUtil {
    static GetAccessTokenString(accessTokenType) {
        if (typeof accessTokenType == "string") {
            return Promise.resolve(accessTokenType);
        }
        else {
            return accessTokenType.getAccessTokenString();
        }
    }
}
exports.AccessTokenUtil = AccessTokenUtil;
//# sourceMappingURL=AccessToken.js.map