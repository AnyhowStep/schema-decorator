import { AssertDelegate } from "../../types";
export declare type DateTime = Date;
export declare function dateTime(fractionalSecondPrecision?: 0 | 1 | 2 | 3): AssertDelegate<DateTime>;
export declare namespace dateTime {
    var nullable: (fractionalSecondPrecision?: 0 | 2 | 1 | 3) => AssertDelegate<Date | null> & {
        __accepts: Date | null;
        __canAccept: Date | null;
    };
}
