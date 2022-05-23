import styled, { keyframes } from 'styled-components';

const Loading = () => (
    <Wrapper>
        <Text>Loading ...</Text>
        <Loader>
            <div/>
            <div/>
        </Loader>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #3a3a3a;
    margin: 0;
`;

const animation = keyframes`
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0;
        left: 0;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`

const Loader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        position: absolute;
        border: 4px solid #3a3a3a;
        opacity: 1;
        border-radius: 50%;
        animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

        &:nth-child(2) {
            animation-delay: -0.5s;
        }
    }
`;

export default Loading;
