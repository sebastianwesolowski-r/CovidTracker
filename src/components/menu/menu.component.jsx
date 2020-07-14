import React from 'react';

import {MenuContainer, MenuAction, MenuLink, Author} from './menu.styles';

const Menu = ({menu, showSearchBox}) => (
    <MenuContainer menu={menu}>
        <MenuAction menu={menu} onClick={() => showSearchBox()}>SEARCH COUNTRY</MenuAction>
        <MenuLink menu={menu} href="https://www.who.int/news-room/q-a-detail/q-a-tips-for-health-and-safety-at-the-workplace-in-the-context-of-covid-19" target="_blank">SAFETY TIPS</MenuLink>
        <MenuLink menu={menu} href="https://covid19api.com" target="_blank">COVID-19 API</MenuLink>
        <Author menu={menu} href="https://sebastianwesolowski.netlify.app" target="_blank">AUTHOR</Author>
    </MenuContainer>
);

export default Menu;