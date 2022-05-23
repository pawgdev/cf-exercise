import styled from 'styled-components';
import { Container } from "./components";

interface NoResultsProps {
    reason: 'empty-results' | 'error';
}

const NoResults = ({ reason }: NoResultsProps) => (
    <Container>
        <Text>
            {reason === 'empty-results' ? 'No results found' : 'An error occurred. Please try again later.'}
        </Text>
    </Container>
);

export default NoResults;

const Text = styled.p`
    font-size: 1.2rem;
    margin-top: 2.5rem;
`;
