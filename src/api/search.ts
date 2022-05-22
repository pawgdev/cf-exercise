interface ResponseEntryItem {
    API: string;
    Description: string;
    Link: string;
}

interface SearchResultItem {
    name: string;
    description: string;
    link: string;
}

const assertResponseEntryItem = (item: ResponseEntryItem) => {
    if (!item.API || !item.Description || !item.Link) {
        return false;
    }

    return item.Description?.length < 100;
}

export function search(title: string): Promise<SearchResultItem[]> {
    return fetch(`https://api.publicapis.org/entries?title=${title}&cors=yes`)
        .then(response => response.json())
        .then<ResponseEntryItem[]>(json => json.entries ?? [])
        .then(entries => entries.reduce((acc, entry) => {
            if (acc.length === 5 || !assertResponseEntryItem(entry)) {
                return acc;
            }

            acc.push({
                name: entry.API,
                description: entry.Description,
                link: entry.Link
            });

            return acc;
        }, [] as SearchResultItem[]))
        .catch(error => {
            console.error(error.message); // push this error to monitoring system, i.e. Sentry

            return error;
        })
}
