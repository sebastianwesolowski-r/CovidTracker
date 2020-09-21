import styled from 'styled-components';

const getItemStyle = props => {
    switch(props.type) {
        case 'confirmed':
            return '#A38F25';
        case 'recovered':
            return '#409519';
        case 'deceased':
            return '#000000';
        default: return;
    };
};

export const StatsItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => getItemStyle(props)};
    letter-spacing: 0.15em;
    span {
        font-size: 1.6rem;
        letter-spacing: 0.2em;
        font-weight: 400;
    }
    @media (max-width: 800px) {
        height: 60px;
        margin: 30px 0;
    }
`;