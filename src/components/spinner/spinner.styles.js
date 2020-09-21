import styled, {keyframes} from 'styled-components';

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    border-top-color: #000000;
    animation: ${spin} 1s ease-in-out infinite;
`;