import * as sd from "../../assert-lib";
import {AssertDelegate} from "../../types";
import * as DateTimeUtil from "./util";

//Just a type alias since we don't support DATETIME(4/5/6)
export type DateTime = Date;

function buildDateTimeDelegate (
    fractionalSecondPrecision : 0|1|2|3/*|4|5|6*/
) {
    return sd.or(
        sd.instanceOf(Date),
        sd.chain(
            sd.string(),
            (name : string, str : string) => {
                try {
                    return DateTimeUtil.fromSqlUtc(str, fractionalSecondPrecision);
                } catch (err) {
                    throw new Error(`${name}: Invalid MySQL DATETIME(${fractionalSecondPrecision}); ${err.message}`);
                }
            }
        ),
        //To work with JSON serialization
        sd.chain(
            sd.match(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,
                name => `${name} must be in the format YYYY-MM-DDTHH:mm:ss.sssZ`
            ),
            (name : string, str : string) => {
                try {
                    str = str.replace("T", " ").replace("Z", "");
                    return DateTimeUtil.fromSqlUtc(str, fractionalSecondPrecision);
                } catch (err) {
                    throw new Error(`${name}: Invalid MySQL DATETIME(${fractionalSecondPrecision}); ${err.message}`);
                }
            }
        )
    );
}
const dateTimeDelegateArr = [
    buildDateTimeDelegate(0),
    buildDateTimeDelegate(1),
    buildDateTimeDelegate(2),
    buildDateTimeDelegate(3),
];
export function dateTime (
    fractionalSecondPrecision : 0|1|2|3/*|4|5|6*/ = 0
) : AssertDelegate<DateTime> {
    return dateTimeDelegateArr[fractionalSecondPrecision];
}
dateTime.nullable = (
    fractionalSecondPrecision : 0|1|2|3/*|4|5|6*/ = 0
) => sd.nullable(dateTime(fractionalSecondPrecision));