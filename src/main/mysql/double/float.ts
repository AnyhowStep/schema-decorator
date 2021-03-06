import * as sd from "../../assert-lib";
import {double} from "./double";

/*
    Alias for DOUBLE for now.
    JS doesn't have `float` type.
*/
export function float () {
    return double();
}
float.nullable = () => sd.nullable(float());