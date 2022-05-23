import { useEffect, useState } from 'react';
import { search, SearchResultItem } from "./api/search";
import Form from "./Form";
import Results from "./Results";
import NoResults from "./NoResults";
import { Loading } from './components';

type AppState = {
    state: 'initial'
} | {
    state: 'in-progress'
} | {
    state: 'success',
    results: SearchResultItem[]
} | {
    state: 'failure',
}

function App() {
    const [ value, setValue ] = useState('');
    const [ state, setState ] = useState<AppState>({ state: 'initial' });

    useEffect(() => {
        if (!value) {
            return;
        }

        (async () => {
            setState({ state: 'in-progress' });
            try {
                const newResults = await search(value);
                setState({ state: 'success', results: newResults });
            } catch {
                setState({ state: 'failure' });
            }
        })();
    }, [ value ]);

    return (
        <>
            <Form onSubmit={setValue}/>
            {state.state === 'in-progress' && <Loading />}
            {state.state === 'success' && state.results.length > 0 && <Results results={state.results}/>}
            {state.state === 'success' && state.results.length === 0 && <NoResults reason="empty-results"/>}
            {state.state === 'failure' && <NoResults reason="error"/>}
        </>
    );
}

export default App;
