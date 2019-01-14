export declare function bigint(): import("../..").AssertDelegate<bigint> & {
    __accepts: string | number | bigint;
    __canAccept: string | number | bigint;
};
export declare namespace bigint {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: string | number | bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
export declare function bigintSigned(): import("../..").AssertDelegate<bigint> & {
    __accepts: bigint;
    __canAccept: string | number | bigint;
};
export declare namespace bigintSigned {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
export declare function bigintUnsigned(): import("../..").AssertDelegate<bigint> & {
    __accepts: bigint;
    __canAccept: string | number | bigint;
};
export declare namespace bigintUnsigned {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
