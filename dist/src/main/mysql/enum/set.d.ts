import { AssertDelegate } from "../../types";
export declare function set<ElementArr extends string[]>(...elements: ElementArr): AssertDelegate<string>;
export declare namespace set {
    var nullable: <ElementArr extends string[]>(...elements: ElementArr) => AssertDelegate<string | null>;
}
