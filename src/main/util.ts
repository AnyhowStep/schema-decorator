export interface AccessorDescriptor {
    configurable : boolean;
    enumerable : boolean;
    get : undefined|(() => any);
    set : undefined|((v: any) => void);
}
export interface AccessorItem {
    name : string,
    descriptor : AccessorDescriptor,
}

export function isAccessorDescriptor (descriptor : PropertyDescriptor|null|undefined) : descriptor is AccessorDescriptor {
    if (descriptor == null) {
        return false;
    }
    return (
        descriptor.hasOwnProperty("get") &&
        descriptor.hasOwnProperty("set") &&
        descriptor.hasOwnProperty("configurable") &&
        descriptor.hasOwnProperty("enumerable") &&
        (
            typeof descriptor.get == "function" ||
            typeof descriptor.get == "undefined"
        ) &&
        (
            typeof descriptor.set == "function" ||
            typeof descriptor.set == "undefined"
        ) &&
        typeof descriptor.configurable == "boolean" &&
        typeof descriptor.enumerable == "boolean"
    );
}
const BUILT_IN_PROTOTYPES = [
    Object.prototype,
    Date.prototype,
];
function isBuiltInPrototype (obj : Object) {
    return BUILT_IN_PROTOTYPES.indexOf(obj) >= 0;
}
export function getOwnAccessors (obj : Object) {
    const arr = Object.getOwnPropertyNames(obj);
    const result : AccessorItem[] = [];
    for (let k of arr) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, k);
        if (isAccessorDescriptor(descriptor)) {
            result.push({
                name : k,
                descriptor : descriptor,
            });
        }
    }
    return result;
}

export function getAllAccessors (obj : Object) {
    const result : AccessorItem[] = [];
    while (!isBuiltInPrototype(obj)) {
        result.push(...getOwnAccessors(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}

export interface VariableDescriptor {
    configurable : boolean;
    enumerable : boolean;
    value : any,
    writable : boolean,
}
export interface VariableItem {
    name : string,
    descriptor : VariableDescriptor,
}
export function isVariableDescriptor (descriptor : PropertyDescriptor|null|undefined) : descriptor is VariableDescriptor {
    if (descriptor == null) {
        return false;
    }
    return (
        descriptor.hasOwnProperty("value") &&
        descriptor.hasOwnProperty("writable") &&
        descriptor.hasOwnProperty("configurable") &&
        descriptor.hasOwnProperty("enumerable") &&
        typeof descriptor.writable == "boolean" &&
        typeof descriptor.configurable == "boolean" &&
        typeof descriptor.enumerable == "boolean"
    );
}

export function getOwnVariables (obj : Object) {
    const arr = Object.getOwnPropertyNames(obj);
    const result : VariableItem[] = [];
    for (let k of arr) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, k);
        if (isVariableDescriptor(descriptor)) {
            result.push({
                name : k,
                descriptor : descriptor,
            });
        }
    }
    return result;
}

export function getAllVariables (obj : Object) {
    const result : VariableItem[] = [];
    while (!isBuiltInPrototype(obj)) {
        result.push(...getOwnVariables(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}
