import * as sd from "../../assert-lib";
import {toTypeStr} from "../../util";

const bigintDelegate = sd.or(
    (name : string, raw : unknown) : bigint => {
        if (typeof raw == "bigint") {
            return raw;
        }
        throw new Error(`Expected ${name} to be of type bigint, received ${toTypeStr(raw)}`);
    },
    sd.chain(
        sd.string(),
        (name : string, str : string) : bigint => {
            try {
                const result = BigInt(str);
                if (result.toString() === str) {
                    return result;
                }
                throw new Error(`${name} is not a valid bigint string`);
            } catch (err) {
                throw new Error(`${name} is not a valid bigint string; ${err.message}`);
            }
        }
    ),
    sd.chain(
        sd.finiteNumber(),
        (name : string, n : number) : bigint => {
            try {
                const result = BigInt(n);
                if (Number(result) === n) {
                    return result;
                }
                throw new Error(`${name} is not a valid bigint number`);
            } catch (err) {
                throw new Error(`${name} is not a valid bigint number; ${err.message}`);
            }
        }
    ),
);
export function bigint () {
    return bigintDelegate;
}
bigint.nullable = () => sd.nullable(bigint());

function lessThan (a : bigint, b : bigint) {
    const aStr = a.toString();
    const bStr = b.toString();
    if (aStr == bStr) {
        return false;
    }
    const aNeg = (aStr[0] == "-");
    const bNeg = (bStr[0] == "-");
    if (aNeg) {
        if (bNeg) {
            //Both negative
            if (aStr.length > bStr.length) {
                //Eg. a = -100, b = -99
                return true;
            } else if (aStr.length < bStr.length) {
                //Eg. a = -99, b = -100
                return false;
            } else {
                return aStr.localeCompare(bStr) > 0;
            }
        } else {
            //Eg. a = -5, b = 100
            return true;
        }
    } else {
        if (bNeg) {
            //Eg. a = 100, b = -5
            return false;
        } else {
            //Both positive
            if (aStr.length < bStr.length) {
                //Eg. a = 99, b = 100
                return true;
            } else if (aStr.length > bStr.length) {
                //Eg. a = 100, b = 99
                return false;
            } else {
                return aStr.localeCompare(bStr) < 0;
            }
        }
    }
}
function greaterThan (a : bigint, b : bigint) {
    const aStr = a.toString();
    const bStr = b.toString();
    if (aStr == bStr) {
        return false;
    }
    return lessThan(b, a);
}
const bigintSignedDelegate = sd.chain(
    bigintDelegate,
    (name : string, value : bigint) => {
        if (lessThan(value, BigInt("-9223372036854775808"))) {
            throw new Error(`${name} must be >= -9,223,372,036,854,775,808`);
        }
        if (greaterThan(value, BigInt("9223372036854775807"))) {
            throw new Error(`${name} must be <= 9,223,372,036,854,775,807`);
        }
        return value;
    }
);
export function bigintSigned () {
    return bigintSignedDelegate;
}
bigintSigned.nullable = () => sd.nullable(bigintSigned());

const bigintUnsignedDelegate = sd.chain(
    bigintDelegate,
    (name : string, value : bigint) => {
        if (lessThan(value, BigInt("0"))) {
            throw new Error(`${name} must be >= 0`);
        }
        if (greaterThan(value, BigInt("18446744073709551616"))) {
            throw new Error(`${name} must be <= 18,446,744,073,709,551,616`);
        }
        return value;
    }
);
export function bigintUnsigned () {
    return bigintUnsignedDelegate;
}
bigintUnsigned.nullable = () => sd.nullable(bigintUnsigned());