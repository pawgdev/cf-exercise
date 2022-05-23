import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { itemWithoutDescription, itemWithoutLink, validItem } from './__stubs__/responseItems';
import { item } from './__stubs__/returnItems';

describe('<App />', () => {
    test('should fetch and render the apis after user type the desired api name', async () => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            json: () => Promise.resolve(({ entries: ([ validItem, itemWithoutLink, itemWithoutDescription ]) })),
        } as Response);

        render(<App/>);

        userEvent.type(screen.getByPlaceholderText('Enter API name...'), 'weather');
        userEvent.click(screen.getByRole('button', { name: 'Search' }));

        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getAllByRole('region')).toHaveLength(1);
        });

        expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

        expect(screen.getByRole('link', { name: item.name })).toHaveAttribute('href', item.link)
        expect(screen.getByText(item.description)).toBeInTheDocument();
    });

    test('should show the info about no results when the response was empty', async () => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            json: () => Promise.resolve(({ entries: null })),
        } as Response);

        render(<App/>);

        userEvent.type(screen.getByPlaceholderText('Enter API name...'), 'weather');
        userEvent.click(screen.getByRole('button', { name: 'Search' }));

        await waitFor(() => {
            expect(screen.getByText(/no results found/i)).toBeInTheDocument();
        });
    });

    test('should show the info about internal or connection issues when promise rejects', async () => {
        jest.spyOn(window, 'fetch').mockRejectedValue(new Error('Internal error'));

        render(<App/>);

        userEvent.type(screen.getByPlaceholderText('Enter API name...'), 'weather');
        userEvent.click(screen.getByRole('button', { name: 'Search' }));

        await waitFor(() => {
            expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
        })
    });
});
