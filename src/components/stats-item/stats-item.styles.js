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
    width: 330px;
    height: 70px;
    font-size: 0.90rem;
    color: ${props => getItemStyle(props)};
    letter-spacing: 0.15em;
    margin: 0 75px;
    span {
        font-size: 1.4rem;
        letter-spacing: 0.2em;
    }
    @media (max-width: 800px) {
        height: 60px;
        margin: 20px 0;
    }
`;