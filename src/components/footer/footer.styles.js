import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: calc(100% - 60px);
    position: absolute;
    bottom: 40px;
    padding-right: 15%;
    letter-spacing: 0.05em;
    z-index: 0;
    p:last-of-type {
        margin-bottom: 45px;
    }
    @media (max-width: 800px) {
        position: static;
        margin-top: 50px;
        padding: 0;
        a:first-of-type {
            margin-right: 70px;
        }
    }
`;

export const FooterParagraph = styled.p`
    font-size: 0.9rem;
    word-wrap: break-word;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.90);
    margin-bottom: 25px;
`;

export const FooterLink = styled.a`
    font-size: 1rem;
    text-decoration: none;
    color: #0038FF;
    margin-right: 40px;
    @media (max-width: 800px) {
        font-size: 0.9rem;
        margin: 0;
    }
`;