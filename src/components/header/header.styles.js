import styled, {css} from 'styled-components';

const HamburgerBar = css`
    width: 42px;
    height: 2px;
    border: 1px solid #000000;
    transition-duration: 350ms;
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const AppName = styled.div`
    font-size: 16px;
    color: #000000;
`;

export const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 42px;
    height: 12px;
    cursor: pointer;
    z-index: 2;
`;

export const HamburgerUpper = styled.div`
    ${HamburgerBar};
    transform: ${props => props.menu ? 'rotate(45deg)' : ''};
`;

export const HamburgerBottom = styled.div`
    ${HamburgerBar};
    transform: ${props => props.menu ? 'rotate(-45deg) translateY(-7px) translateX(7px)' : ''};
`;