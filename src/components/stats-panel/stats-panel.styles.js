import styled from 'styled-components';

export const PanelContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    margin-top: 80px;
    z-index: 1;
    @media (max-width: 800px) {
        height: unset;
        margin-top: 40px;
    }
`;

export const PanelItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 950px;
    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
    }
`;