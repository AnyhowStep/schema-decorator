import { AssertDelegate } from "./AssertDelegate";
export declare type Assertion<T> = ({
    isCtor: true;
    func: {
        new (): T;
    };
} | {
    isCtor: false;
    func: AssertDelegate<T>;
});
