export interface AccessorDescriptor {
    configurable: boolean;
    enumerable: boolean;
    get: undefined | (() => any);
    set: undefined | ((v: any) => void);
}
export interface AccessorItem {
    name: string;
    descriptor: AccessorDescriptor;
}
export declare function isAccessorDescriptor(descriptor: PropertyDescriptor | null | undefined): descriptor is AccessorDescriptor;
export declare function getOwnAccessors(obj: Object): AccessorItem[];
export declare function getAllAccessors(obj: Object): AccessorItem[];
export interface VariableDescriptor {
    configurable: boolean;
    enumerable: boolean;
    value: any;
    writable: boolean;
}
export interface VariableItem {
    name: string;
    descriptor: VariableDescriptor;
}
export declare function isVariableDescriptor(descriptor: PropertyDescriptor | null | undefined): descriptor is VariableDescriptor;
export declare function getOwnVariables(obj: Object): VariableItem[];
export declare function getAllVariables(obj: Object): VariableItem[];
