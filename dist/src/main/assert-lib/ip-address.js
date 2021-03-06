"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = require("./basic");
const operator_1 = require("./operator");
const number_1 = require("./number");
const string_1 = require("./string");
/*
    https://en.wikipedia.org/wiki/Dot-decimal_notation

    An octet is 8-bits.
    In decimal, an octet can represent [0, 255].

    IPv4 strings are made of four octets (written in decimal),
    each separated by a period.

    Examples:

    127.0.0.1
    255.255.255.0
    255.255.255.255
*/
function ipV4OctetString() {
    return operator_1.chain(string_1.stringToNaturalNumber(), number_1.ltEq(255), (_name, octet) => {
        return octet.toString();
    });
}
exports.ipV4OctetString = ipV4OctetString;
function ipV4String() {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const rawOctets = str
            .replace(/\s+/g, "")
            .split(".");
        if (rawOctets.length != 4) {
            throw new Error(`Expected ${name} to have four octets; found ${rawOctets.length}`);
        }
        return rawOctets
            .map((rawOctet, i) => ipV4OctetString()(`${name} octet${i}`, rawOctet))
            .join(".");
    });
}
exports.ipV4String = ipV4String;
/*
    == INPUT ==
    https://tools.ietf.org/html/rfc4291#section-2.2

    Each IPv6 segment is any hexadecimal value between
    0 and ffff.

    Each segment is one to four hexadecimal digits.

    == OUTPUT ==
    https://tools.ietf.org/html/rfc5952#section-4.1
    Leading zeros MUST be suppressed.  For example, 2001:0db8::0001 is
    not acceptable and must be represented as 2001:db8::1.  A single 16-
    bit 0000 field MUST be represented as 0.

    https://tools.ietf.org/html/rfc5952#section-4.3

    The characters "a", "b", "c", "d", "e", and "f" in an IPv6 address
    MUST be represented in lowercase.
*/
function ipV6SegmentString() {
    return operator_1.chain(string_1.varChar(1, 4), string_1.hexadecimalString(), (_name, str) => {
        if (/^0+$/.test(str)) {
            return "0";
        }
        return str.toLowerCase()
            .replace(/^0+/, "");
    });
}
exports.ipV6SegmentString = ipV6SegmentString;
function consecutiveZeroCount(segments, start) {
    let count = 0;
    while (segments[start] == "0") {
        ++count;
        ++start;
    }
    return count;
}
function largestConsecutiveZeroCount(segments) {
    let largestStart = 0;
    let largestCount = 0;
    let curStart = 0;
    while (curStart < segments.length) {
        const curCount = consecutiveZeroCount(segments, curStart);
        if (curCount > largestCount) {
            largestStart = curStart;
            largestCount = curCount;
        }
        ++curStart;
    }
    return {
        start: largestStart,
        count: largestCount,
        before: segments.slice(0, largestStart),
        after: segments.slice(largestStart + largestCount),
    };
}
/*
    https://tools.ietf.org/html/rfc5952#section-4.2.1

    The use of the symbol "::" MUST be used to its maximum capability.
    For example, 2001:db8:0:0:0:0:2:1 must be shortened to 2001:db8::2:1.
    Likewise, 2001:db8::0:1 is not acceptable, because the symbol "::"
    could have been used to produce a shorter representation 2001:db8::1.

    https://tools.ietf.org/html/rfc5952#section-4.2.2

    The symbol "::" MUST NOT be used to shorten just one 16-bit 0 field.
    For example, the representation 2001:db8:0:1:1:1:1:1 is correct, but
    2001:db8::1:1:1:1:1 is not correct.

    https://tools.ietf.org/html/rfc5952#section-4.2.3

    When there is an alternative choice in the placement of a "::", the
    longest run of consecutive 16-bit 0 fields MUST be shortened (i.e.,
    the sequence with three consecutive zero fields is shortened in 2001:
    0:0:1:0:0:0:1).  When the length of the consecutive 16-bit 0 fields
    are equal (i.e., 2001:db8:0:0:1:0:0:1), the first sequence of zero
    bits MUST be shortened.  For example, 2001:db8::1:0:0:1 is correct
    representation.
*/
function toIpV6CanonicalString(segments) {
    const result = largestConsecutiveZeroCount(segments);
    if (result.count <= 1) {
        return segments.join(":");
    }
    else {
        return (result.before.join(":") +
            "::" +
            result.after.join(":"));
    }
}
function ipV6StringWithMaxSegmentCount(maxSegmentCount) {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const consecutiveNonZero = str
            .replace(/\s+/g, "")
            .split("::");
        if (consecutiveNonZero.length == 1) {
            //All non-zeroes
            const rawSegments = consecutiveNonZero[0].split(":");
            if (rawSegments.length != maxSegmentCount) {
                throw new Error(`Expected ${name} to have ${maxSegmentCount} segments; found ${rawSegments.length}`);
            }
            const segments = rawSegments
                .map((rawSegment, i) => ipV6SegmentString()(`${name} segment${i}`, rawSegment));
            return toIpV6CanonicalString(segments);
        }
        else if (consecutiveNonZero.length == 2) {
            //E.g. ffff:ffff::ffff:ffff:ffff
            const rawSegmentsA = consecutiveNonZero[0].split(":").filter(s => s != "");
            const rawSegmentsB = consecutiveNonZero[1].split(":").filter(s => s != "");
            const rawSegmentCount = rawSegmentsA.length + rawSegmentsB.length;
            if (rawSegmentCount >= maxSegmentCount) {
                throw new Error(`Expected ${name} to have up to ${maxSegmentCount - 1} segments when '::' symbol is used; found ${rawSegmentCount}`);
            }
            const segmentsA = rawSegmentsA
                .map((rawSegment, i) => ipV6SegmentString()(`${name} segment${i}`, rawSegment));
            const segmentBStart = maxSegmentCount - rawSegmentsB.length;
            const segmentsB = rawSegmentsB
                .map((rawSegment, i) => ipV6SegmentString()(`${name} segment${segmentBStart + i}`, rawSegment));
            const zeroes = Array(maxSegmentCount - rawSegmentCount).fill("0");
            return toIpV6CanonicalString(segmentsA
                .concat(zeroes)
                .concat(segmentsB));
        }
        else {
            throw new Error(`${name} can only have '::' symbol once; found ${consecutiveNonZero.length - 1} uses`);
        }
    });
}
exports.ipV6StringWithMaxSegmentCount = ipV6StringWithMaxSegmentCount;
function ipV6String() {
    return ipV6StringWithMaxSegmentCount(8);
}
exports.ipV6String = ipV6String;
function ipV4MappedIpV6String() {
    return operator_1.chain(basic_1.string(), (name, str) => {
        const ipV4Start = str.lastIndexOf(":");
        if (ipV4Start < 0) {
            throw new Error(`Expected ${name} to have ':' symbol`);
        }
        const rawIpV4 = str.substr(ipV4Start + 1);
        //Must have [1, 6] segments
        //Note : If input ends with "::", rawIpV6 becomes ":"
        const rawIpV6 = str.substr(0, ipV4Start);
        if (rawIpV6.length == 0) {
            throw new Error(`Expected ${name} to have one to six IPv6 segments; found zero`);
        }
        const rawIpV6EndsWithDoubleColon = rawIpV6.endsWith(":");
        const ipV4 = ipV4String()(`${name} IPv4 part`, rawIpV4);
        const ipV6 = ipV6StringWithMaxSegmentCount(6)(`${name} IPv6 part`, rawIpV6EndsWithDoubleColon ?
            rawIpV6 + ":" :
            rawIpV6);
        if (ipV6.endsWith("::")) {
            return ipV6 + ipV4;
        }
        else if (ipV6.endsWith(":")) {
            return ipV6 + ipV4;
        }
        else {
            return ipV6 + ":" + ipV4;
        }
    });
}
exports.ipV4MappedIpV6String = ipV4MappedIpV6String;
function ipAddressString() {
    return operator_1.or(ipV4String(), ipV6String(), ipV4MappedIpV6String());
}
exports.ipAddressString = ipAddressString;
//# sourceMappingURL=ip-address.js.map