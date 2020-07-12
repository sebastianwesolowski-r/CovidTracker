import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: calc(100% - 60px);
    position: absolute;
    bottom: 30px;
    padding-right: 15%;
    letter-spacing: 0.05em;
    z-index: 0;
`;

export const FooterParagraph = styled.p`
    font-size: 15px;
    word-wrap: break-word;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.80);
    margin-bottom: 25px;
`;

export const FooterLink = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: #0038FF;
    margin-right: 40px;
`;