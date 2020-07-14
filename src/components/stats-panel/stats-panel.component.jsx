import React from 'react';

import {PanelContainer, PanelTitle, PanelItems} from './stats-panel.styles';

import StatsItem from '../stats-item/stats-item.component';

const StatsPanel = ({data}) => (
    <PanelContainer>
        <PanelTitle>{data.initialFetch ? 'WORLD CASES' : `CASES IN ${data.stats.country.toUpperCase()}`}</PanelTitle>
        <PanelItems>
            <StatsItem type={'confirmed'} number={data.stats.confirmed}/>
            <StatsItem type={'recovered'} number={data.stats.recovered}/>
            <StatsItem type={'deceased'} number={data.stats.deceased}/>
        </PanelItems>
    </PanelContainer>
);

export default React.memo(StatsPanel);