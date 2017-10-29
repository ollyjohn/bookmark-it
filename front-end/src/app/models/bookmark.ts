export interface Bookmark {
    creator: string,
    title: string,
    description: string,
    url: string,
    image?: string,
    date_created: Date,
    date_updated?: Date,
    tags?: string
}