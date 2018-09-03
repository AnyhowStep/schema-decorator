"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const operator_1 = require("./operator");
const number_1 = require("./number");
function buffer() {
    return object_1.instanceOf(Buffer);
}
exports.buffer = buffer;
function maxByteLength(max) {
    const result = (name, mixed) => {
        const byteLength = number_1.naturalNumber()(`${name}.byteLength`, mixed.byteLength);
        if (byteLength > max) {
            throw new Error(`${name} cannot be longer than ${max}, received ${byteLength}`);
        }
        return mixed;
    };
    return result;
}
exports.maxByteLength = maxByteLength;
function minByteLength(min) {
    const result = (name, mixed) => {
        const byteLength = number_1.naturalNumber()(`${name}.byteLength`, mixed.byteLength);
        if (byteLength < min) {
            throw new Error(`${name} cannot be shorter than ${min}, received ${byteLength}`);
        }
        return mixed;
    };
    return result;
}
exports.minByteLength = minByteLength;
function tinyBlob() {
    return operator_1.and(buffer(), maxByteLength(255) //2^8-1
    );
}
exports.tinyBlob = tinyBlob;
function blob() {
    return operator_1.and(buffer(), maxByteLength(65535) //2^16-1
    );
}
exports.blob = blob;
function mediumBlob() {
    return operator_1.and(buffer(), maxByteLength(16777215) //2^24-1
    );
}
exports.mediumBlob = mediumBlob;
function longBlob() {
    return operator_1.and(buffer(), maxByteLength(4294967295) //2^32-1
    );
}
exports.longBlob = longBlob;
//# sourceMappingURL=buffer.js.map