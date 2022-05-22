import { render, screen } from '@testing-library/react';
import Results from './Results';
import { item, anotherItem } from './__stubs__/returnItems';

describe('<Results />', () => {
    test('should render passed results', () => {
        render(<Results results={[item, anotherItem]} />);

        expect(screen.getAllByRole('region')).toHaveLength(2);

        expect(screen.getByRole('link', { name: item.name })).toHaveAttribute('href', item.link);
        expect(screen.getByText(item.description)).toBeInTheDocument();

        expect(screen.getByRole('link', { name: anotherItem.name })).toHaveAttribute('href', anotherItem.link);
        expect(screen.getByText(anotherItem.description)).toBeInTheDocument();
    });
});
