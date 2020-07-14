import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    width: 300px;
    height: 40px;
    border: 1px solid #000000;
    margin: auto;
    padding: 0 10px;
    svg {
        cursor: pointer;
    }
`;

export const SearchBoxInput = styled.input`
    width: 250px;
    height: 100%;
    font-size: 15px;
    color: #000000;
    letter-spacing: 0.15em;
    border: none;
    background: none;
    outline: none;
    &::placeholder {
        font-size: 13px;
        color: rgba(0,0,0, 0.70);
    }
`;