import { AssertDelegate } from "./types";
export declare type Assertion<T> = ({
    isCtor: true;
    func: {
        new (): T;
    };
} | {
    isCtor: false;
    func: AssertDelegate<T>;
});
