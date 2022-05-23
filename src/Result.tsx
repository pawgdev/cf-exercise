import styled from 'styled-components';

interface ResultProp {
    name: string;
    description: string;
    link: string;
}

const Result = ({ name, description, link }: ResultProp) => (
    <ResultWrapper aria-labelledby={name}>
        <Name id={name}>
            <Link href={link} target="_blank">{name}</Link>
        </Name>
        <Description>{description}</Description>
    </ResultWrapper>
);

export default Result;

const ResultWrapper = styled.section`
    margin: 1.5rem 0;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #3a3a3a;
`;

const Name = styled.h3`
    font-size: 1.15rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
    color: #3a3a3a;
`;

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
`;

const Description = styled.p`
    font-size: 1rem;
    margin: 0;
    color: #3a3a3a;
`;
