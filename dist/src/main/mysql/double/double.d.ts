export declare function double(): import("../..").AssertDelegate<number> & {
    __accepts: number;
    __canAccept: string | number;
};
export declare namespace double {
    var nullable: () => import("../..").AssertDelegate<number | null> & {
        __accepts: number | null;
        __canAccept: string | number | null;
    };
}
