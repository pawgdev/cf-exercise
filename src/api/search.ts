interface SearchResultItem {
    name: string;
    description: string;
    link: string;
}

export function search(title: string): Promise<SearchResultItem[]> {
    return fetch(`https://api.publicapis.org/entries?title=${title}&cors=yes`);
}
