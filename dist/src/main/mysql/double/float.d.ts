export declare function float(): import("../..").AssertDelegate<number> & {
    __accepts: number;
    __canAccept: string | number;
};
export declare namespace float {
    var nullable: () => import("../..").AssertDelegate<number | null> & {
        __accepts: number | null;
        __canAccept: string | number | null;
    };
}
