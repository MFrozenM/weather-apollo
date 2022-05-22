export enum Columns {
    Left = "left",
    Right = "right"
}

export interface RowAnimatedWrapperModel {
    stack: string | number
    column: Columns
}
