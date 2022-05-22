import {TitleSizes} from "../Title/title.model";
import {ValueSizes} from "../value/value.model";

export interface RowModel {
    titleText: string
    titleSize: TitleSizes

    valueText: string
    valueSize: ValueSizes
}
