import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const AppHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    position: absolute;
    top: 0;
    font-size: 1.2rem;
    letter-spacing: 0.15em;
    color: #656565;
    border-bottom: 1px solid #C2C2C2;
    @media (max-width: 800px) {
        height: 55px;
        font-size: 1rem;
    }
`;

export const Informations = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin-top: 40px;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 780px;
        height: 100%;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        word-wrap: break-word;
        padding-top: 140px;
        p {
            line-height: 25px;
            margin-bottom: 20px;
        }
    }
    @media (max-width: 800px) {
        justify-content: center;
        width: 100%;
        svg {
            position: absolute;
            z-index: 0;
            top: 170px;
            opacity: 0.17;
        }
        div {
            display: none;
        }
    }
`;

export const AppFooter = styled.footer`
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    background-color: #F2F2F2;
    @media (max-width: 800px) {
        height: 120px;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        width: 100%;
        padding: 0 40px;
    }
`

export const FooterLink = styled.a`
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-decoration: none;
    color: #0038FF;
    transition-duration: 200ms;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 800px) {
        font-size: 0.8rem;
        text-align: center;
    }
`;