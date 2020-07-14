import React from 'react';

import {StatsItemContainer} from './stats-item.styles';

const StatsItem = ({type, number}) => {

    const numberWithSpaces = number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    return (
        <StatsItemContainer type={type}>
            {type.toUpperCase()}
            <span>{numberWithSpaces}</span>
        </StatsItemContainer>
    );
};

export default StatsItem;