/// <reference types="node" />
import { AssertDelegate } from "../types";
export declare function buffer(): AssertDelegate<Buffer> & {
    __accepts: Buffer;
    __canAccept: Buffer;
};
export declare function maxByteLength(max: number): (AssertDelegate<{
    byteLength: number;
}> & {
    __accepts: {
        byteLength: number;
    };
});
export declare function minByteLength(min: number): (AssertDelegate<{
    byteLength: number;
}> & {
    __accepts: {
        byteLength: number;
    };
});
export declare function tinyBlob(): AssertDelegate<Buffer & {
    byteLength: number;
}> & {
    __accepts: Buffer & {
        byteLength: number;
    };
    __canAccept: Buffer & {
        byteLength: number;
    };
};
export declare function blob(): AssertDelegate<Buffer & {
    byteLength: number;
}> & {
    __accepts: Buffer & {
        byteLength: number;
    };
    __canAccept: Buffer & {
        byteLength: number;
    };
};
export declare function mediumBlob(): AssertDelegate<Buffer & {
    byteLength: number;
}> & {
    __accepts: Buffer & {
        byteLength: number;
    };
    __canAccept: Buffer & {
        byteLength: number;
    };
};
export declare function longBlob(): AssertDelegate<Buffer & {
    byteLength: number;
}> & {
    __accepts: Buffer & {
        byteLength: number;
    };
    __canAccept: Buffer & {
        byteLength: number;
    };
};
