import {AssertDelegate} from "../types";
import {and} from "./operator";
import {unsafeNumber} from "./basic";

export function finiteNumber () : AssertDelegate<number> {
    return and(
        unsafeNumber(),
        (name : string, num : number) : number => {
            if (isNaN(num)) {
                throw new Error(`${name} cannot be NaN, received ${num}`);
            }
            if (!isFinite(num)) {
                throw new Error(`${name} must be finite, received ${num}`);
            }
            return num;
        }
    );
}
//Alias for finiteNumber()
export function number () : AssertDelegate<number> {
    return finiteNumber();
}

export function integer () : AssertDelegate<number> {
    return and(
        finiteNumber(),
        (name : string, num : number) : number => {
            if (Math.floor(num) !== num) {
                throw new Error(`${name} must be an integer, received ${num}`);
            }
            return num;
        }
    );
}
export function nonNegativeNumber () : AssertDelegate<number> {
    return and(
        finiteNumber(),
        (name : string, num : number) : number => {
            if (num < 0) {
                throw new Error(`${name} cannot be negative, received ${num}`);
            }
            return num;
        }
    );
}
export function naturalNumber () : AssertDelegate<number> {
    return and(
        integer(),
        nonNegativeNumber()
    );
}