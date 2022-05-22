export enum TitleSizes {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export interface TitleModel {
    text: string
    size: TitleSizes
}
