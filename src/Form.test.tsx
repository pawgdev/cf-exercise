import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('<Form />', () => {
    test('user should be able to submit a search textbox value', () => {
        const onSubmit = jest.fn();
        render(<Form onSubmit={onSubmit} />);

        userEvent.type(screen.getByRole('textbox'), 'test');
        userEvent.click(screen.getByRole('button', { name: /search/i }));

        expect(onSubmit).toHaveBeenCalledWith('test');
    }); 
})
