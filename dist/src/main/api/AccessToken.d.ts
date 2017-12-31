export interface IAccessToken {
    getAccessTokenString(): Promise<string>;
}
export declare type AccessTokenType = string | IAccessToken;
export declare class AccessTokenUtil {
    static GetAccessTokenString(accessTokenType: AccessTokenType): Promise<string>;
}
