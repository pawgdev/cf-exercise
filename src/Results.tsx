import styled from 'styled-components';
import type { SearchResultItem } from './api/search'
import Result from './Result';
import { Container } from "./components";

interface ResultsProps {
    results: SearchResultItem[];
}

const Results = ({ results }: ResultsProps) => (
    <Container>
        <Header>Results</Header>
        {results.map(({ name, description, link }) => (
            <Result key={name} name={name} description={description} link={link} />
        ))}
    </Container>
);

export default Results;

const Header = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    margin: 2.5rem 0;
    color: #3a3a3a;
`;
