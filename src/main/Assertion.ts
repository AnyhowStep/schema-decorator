//TODO Phase out
import {AssertDelegate} from "./types";

export type Assertion<T> = (
    {
        isCtor : true,
        func   : {new():T},
    } |
    {
        isCtor : false,
        func   : AssertDelegate<T>,
    }
);
