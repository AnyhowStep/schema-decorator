export declare const assertBoolean: import("../..").AssertDelegate<boolean> & {
    __accepts: boolean | 0 | 1 | "0" | "1";
    __canAccept: boolean | 0 | 1 | "0" | "1";
};
export declare const assertTrue: import("../..").AssertDelegate<boolean> & {
    __accepts: true | 1 | "1";
    __canAccept: true | 1 | "1";
};
export declare const assertFalse: import("../..").AssertDelegate<boolean> & {
    __accepts: false | 0 | "0";
    __canAccept: false | 0 | "0";
};
export declare function boolean(): import("../..").AssertDelegate<boolean> & {
    __accepts: boolean | 0 | 1 | "0" | "1";
    __canAccept: boolean | 0 | 1 | "0" | "1";
};
export declare namespace boolean {
    var nullable: () => import("../..").AssertDelegate<boolean | null> & {
        __accepts: boolean | 0 | 1 | "0" | "1" | null;
        __canAccept: boolean | 0 | 1 | "0" | "1" | null;
    };
}
declare function getTrue(): import("../..").AssertDelegate<boolean> & {
    __accepts: true | 1 | "1";
    __canAccept: true | 1 | "1";
};
declare namespace getTrue {
    var nullable: () => import("../..").AssertDelegate<boolean | null> & {
        __accepts: true | 1 | "1" | null;
        __canAccept: true | 1 | "1" | null;
    };
}
declare function getFalse(): import("../..").AssertDelegate<boolean> & {
    __accepts: false | 0 | "0";
    __canAccept: false | 0 | "0";
};
declare namespace getFalse {
    var nullable: () => import("../..").AssertDelegate<boolean | null> & {
        __accepts: false | 0 | "0" | null;
        __canAccept: false | 0 | "0" | null;
    };
}
export { getTrue as true, getFalse as false, };
