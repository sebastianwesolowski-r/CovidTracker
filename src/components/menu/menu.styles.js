import styled, {css} from 'styled-components';

const visibilityTransition = css`
    opacity: ${props => props.menu ? '1' : '0'};
    transition-delay: ${props => props.menu ? '250ms' : '0'};
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.menu ? '200px' : '0'};
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    color: #000000;
    letter-spacing: 0.15em;
    border-left: 1px solid #000000;
    padding-top: 220px;
    transition-duration: 350ms;
    z-index: 1;
    pointer-events: all;
    background-color: #FFFFFF;
    @media (max-width: 800px) {
        position: fixed;
    }
`;

export const MenuAction = styled.div`
    font-size: 0.9rem;
    margin-bottom: 100px;
    cursor: pointer;
    ${visibilityTransition};
`;

export const MenuLink = styled.a`
    font-size: 0.8rem;
    color: inherit;
    text-decoration: none;
    margin-bottom: 100px;
    ${visibilityTransition};
`;

export const Author = styled.a`
    position: absolute;
    bottom: 30px;
    font-size: 0.7rem;
    color: inherit;
    text-decoration: none;
    ${visibilityTransition};
`;