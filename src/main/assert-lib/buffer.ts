import {AssertDelegate} from "../types";
import {instanceOf} from "./object";
import {and} from "./operator";
import {naturalNumber} from "./number";

export function buffer () {
    return instanceOf(Buffer);
}

export function maxByteLength (max : number) : (
    AssertDelegate<{ byteLength : number }> &
    {
        __accepts : { byteLength : number }
    }
) {
    const result : AssertDelegate<{ byteLength : number }> = (name : string, mixed : unknown) : { byteLength : number } => {
        const byteLength = naturalNumber()(`${name}.byteLength`, (mixed as any).byteLength);
        if (byteLength > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${byteLength}`);
        }
        return mixed as any;
    };
    return result as any;
}
export function minByteLength (min : number) : (
    AssertDelegate<{ byteLength : number }> &
    {
        __accepts : { byteLength : number }
    }
) {
    const result : AssertDelegate<{ byteLength : number }> = (name : string, mixed : unknown) : { byteLength : number } => {
        const byteLength = naturalNumber()(`${name}.byteLength`, (mixed as any).byteLength);
        if (byteLength < min) {
            throw new Error(`${name} cannot be shorter than ${min}, received ${byteLength}`);
        }
        return mixed as any;
    };
    return result as any;
}

export function tinyBlob () : AssertDelegate<Buffer> {
    return and(
        buffer(),
        maxByteLength(255) //2^8-1
    );
}

export function blob () : AssertDelegate<Buffer> {
    return and(
        buffer(),
        maxByteLength(65_535) //2^16-1
    );
}

export function mediumBlob () : AssertDelegate<Buffer> {
    return and(
        buffer(),
        maxByteLength(16_777_215) //2^24-1
    );
}

export function longBlob () : AssertDelegate<Buffer> {
    return and(
        buffer(),
        maxByteLength(4_294_967_295) //2^32-1
    );
}
