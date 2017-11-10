export interface Bookmark {
    creator: string;
    title: string;
    url: string;
    image?: string;
    date_created: Date;
    date_updated?: Date;
    tags?: any;
}
