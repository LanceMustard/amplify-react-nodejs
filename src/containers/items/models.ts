
export interface Tag {
    group: string,
    name: string
}

export interface SearchResultItem {
    name: string, 
    tags: Tag[] 
};

export interface Column {
    label: string,
}
