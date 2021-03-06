import React from 'react';

import {PanelContainer, PanelTitle, PanelItems} from './stats-panel.styles';

import StatsItem from '../stats-item/stats-item.component';
import Spinner from '../spinner/spinner.component';

const StatsPanel = ({isFetching, data}) => (
    <PanelContainer>
        {
            isFetching ? (
                <Spinner />
            ) : (
                <PanelItems>
                    <StatsItem type={'confirmed'} number={data.stats.confirmed}/>
                    <StatsItem type={'recovered'} number={data.stats.recovered}/>
                    <StatsItem type={'deceased'} number={data.stats.deceased}/>
                </PanelItems>
            )
        }
    </PanelContainer>
);

export default React.memo(StatsPanel);