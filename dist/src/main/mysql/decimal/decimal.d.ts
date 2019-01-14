export declare type Decimal = string;
export declare function decimal(): import("../..").AssertDelegate<string> & {
    __accepts: string | number;
    __canAccept: string | number;
};
export declare namespace decimal {
    var nullable: () => import("../..").AssertDelegate<string | null> & {
        __accepts: string | number | null;
        __canAccept: string | number | null;
    };
}
