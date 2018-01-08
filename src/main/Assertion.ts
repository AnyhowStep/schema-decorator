import {AssertDelegate} from "./AssertDelegate";

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
