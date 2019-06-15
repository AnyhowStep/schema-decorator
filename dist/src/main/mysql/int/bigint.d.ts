declare function bigint(): import("../..").AssertDelegate<bigint> & {
    __accepts: string | number | bigint;
    __canAccept: string | number | bigint;
};
declare namespace bigint {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: string | number | bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
export default bigint;
declare function bigintSigned(): import("../..").AssertDelegate<bigint> & {
    __accepts: bigint;
    __canAccept: string | number | bigint;
};
declare namespace bigintSigned {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
export default bigintSigned;
declare function bigintUnsigned(): import("../..").AssertDelegate<bigint> & {
    __accepts: bigint;
    __canAccept: string | number | bigint;
};
declare namespace bigintUnsigned {
    var nullable: () => import("../..").AssertDelegate<bigint | null> & {
        __accepts: bigint | null;
        __canAccept: string | number | bigint | null;
    };
}
export default bigintUnsigned;
