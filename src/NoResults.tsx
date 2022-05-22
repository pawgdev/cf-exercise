import styled from 'styled-components';

interface NoResultsProps {
    reason: 'empty-results' | 'error';
}

const NoResults = ({ reason }: NoResultsProps) => (
    <Text>
        {reason === 'empty-results' ? 'No results found' : 'An error occurred. Please try again later.'}
    </Text>
);

export default NoResults;

const Text = styled.p`
    font-size: 1.2rem;
    margin-top: 2.5rem;
`;
