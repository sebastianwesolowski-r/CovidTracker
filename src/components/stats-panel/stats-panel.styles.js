import styled from 'styled-components';

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
    border: 1px solid;
    margin-top: 180px;
    @media (max-width: 800px) {
        margin-top: 100px;
    }
`;

export const PanelTitle = styled.div`
    font-size: 0.9rem;
    color: #000000;
    text-align: center;
    letter-spacing: 0.15em;
    margin-bottom: 100px;
    @media (max-width: 800px) {
        margin-bottom: 60px;
    }
`;

export const PanelItems = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;