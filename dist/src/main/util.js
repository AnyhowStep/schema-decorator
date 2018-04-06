"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAccessorDescriptor(descriptor) {
    if (descriptor == null) {
        return false;
    }
    return (descriptor.hasOwnProperty("get") &&
        descriptor.hasOwnProperty("set") &&
        descriptor.hasOwnProperty("configurable") &&
        descriptor.hasOwnProperty("enumerable") &&
        (typeof descriptor.get == "function" ||
            typeof descriptor.get == "undefined") &&
        (typeof descriptor.set == "function" ||
            typeof descriptor.set == "undefined") &&
        typeof descriptor.configurable == "boolean" &&
        typeof descriptor.enumerable == "boolean");
}
exports.isAccessorDescriptor = isAccessorDescriptor;
const BUILT_IN_PROTOTYPES = [
    Object.prototype,
    Date.prototype,
];
function isBuiltInPrototype(obj) {
    return BUILT_IN_PROTOTYPES.indexOf(obj) >= 0;
}
function getOwnAccessors(obj) {
    const arr = Object.getOwnPropertyNames(obj);
    const result = [];
    for (let k of arr) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, k);
        if (isAccessorDescriptor(descriptor)) {
            result.push({
                name: k,
                descriptor: descriptor,
            });
        }
    }
    return result;
}
exports.getOwnAccessors = getOwnAccessors;
function getAllAccessors(obj) {
    const result = [];
    while (!isBuiltInPrototype(obj)) {
        result.push(...getOwnAccessors(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}
exports.getAllAccessors = getAllAccessors;
function getAccessor(obj, name) {
    if (isBuiltInPrototype(obj)) {
        return undefined;
    }
    const potentialResult = Object.getOwnPropertyDescriptor(obj, name);
    if (potentialResult == undefined || !isAccessorDescriptor(potentialResult)) {
        return getAccessor(Object.getPrototypeOf(obj), name);
    }
    return potentialResult;
}
exports.getAccessor = getAccessor;
function isVariableDescriptor(descriptor) {
    if (descriptor == null) {
        return false;
    }
    return (descriptor.hasOwnProperty("value") &&
        descriptor.hasOwnProperty("writable") &&
        descriptor.hasOwnProperty("configurable") &&
        descriptor.hasOwnProperty("enumerable") &&
        typeof descriptor.writable == "boolean" &&
        typeof descriptor.configurable == "boolean" &&
        typeof descriptor.enumerable == "boolean");
}
exports.isVariableDescriptor = isVariableDescriptor;
function getOwnVariables(obj) {
    const arr = Object.getOwnPropertyNames(obj);
    const result = [];
    for (let k of arr) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, k);
        if (isVariableDescriptor(descriptor)) {
            result.push({
                name: k,
                descriptor: descriptor,
            });
        }
    }
    return result;
}
exports.getOwnVariables = getOwnVariables;
function getAllVariables(obj) {
    const result = [];
    while (!isBuiltInPrototype(obj)) {
        result.push(...getOwnVariables(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}
exports.getAllVariables = getAllVariables;
function isExactInstanceOf(mixed, ctor) {
    if (mixed == undefined) {
        return false;
    }
    if (!(mixed instanceof Object)) {
        return false;
    }
    return (Object.getPrototypeOf(mixed).constructor == ctor);
}
exports.isExactInstanceOf = isExactInstanceOf;
//# sourceMappingURL=util.js.map