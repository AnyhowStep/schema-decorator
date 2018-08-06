export declare function numberToBoolean(): import("../types").AssertDelegate<boolean> & {
    __accepts: boolean;
    __canAccept: number | boolean;
};
export declare function stringToBoolean(): import("../types").AssertDelegate<boolean> & {
    __accepts: boolean;
    __canAccept: string | boolean;
};
export declare function numberToTrue(): import("../types").AssertDelegate<true> & {
    __accepts: true;
    __canAccept: number | boolean;
};
export declare function numberToFalse(): import("../types").AssertDelegate<false> & {
    __accepts: false;
    __canAccept: number | boolean;
};
export declare function stringToTrue(): import("../types").AssertDelegate<true> & {
    __accepts: true;
    __canAccept: string | boolean;
};
export declare function stringToFalse(): import("../types").AssertDelegate<false> & {
    __accepts: false;
    __canAccept: string | boolean;
};
