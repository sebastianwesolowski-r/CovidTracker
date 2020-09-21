import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 1.2rem;
    color: #000000;
    letter-spacing: 0.1em;
    margin: 0 auto;
    margin-top: 150px;
    svg {
        transition-duration: 200ms;
        cursor: pointer;
        ${props => props.searchActive ? "transform: scale(1.5)" : ""};
    }
    @media (max-width: 800px) {
        margin-top: 100px;
    }
`;

export const SearchBoxInput = styled.input`
    width: ${props => props.searchActive ? "200px" : "0px"};
    height: 100%;
    font-size: 1.2rem;
    color: #000000;
    letter-spacing: 0.1em;
    border: none;
    background: transparent;
    outline: none;
    margin-left: 5px;
    transition-duration: 200ms;
    &::placeholder {
        color: #606E88;
    }
`;