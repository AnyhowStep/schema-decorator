export interface IAccessToken {
    getAccessTokenString () : Promise<string>;
}
export type AccessTokenType = string|IAccessToken;

export class AccessTokenUtil {
    public static GetAccessTokenString (accessTokenType : AccessTokenType) : Promise<string> {
        if (typeof accessTokenType == "string") {
            return Promise.resolve(accessTokenType);
        } else {
            return accessTokenType.getAccessTokenString();
        }
    }
}
