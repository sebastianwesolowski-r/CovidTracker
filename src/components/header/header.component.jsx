import React from 'react';

import {HeaderContainer, AppName, Hamburger, HamburgerUpper, HamburgerBottom} from './header.styles';

const Header = ({menu, showMenu}) => (
    <HeaderContainer>
        <AppName>COVID-19 TRACKER</AppName>
        <Hamburger onClick={() => showMenu()}>
            <HamburgerUpper menu={menu}/>
            <HamburgerBottom menu={menu}/>
        </Hamburger>
    </HeaderContainer>
);

export default Header;