import React from 'react';

import {FooterContainer, FooterParagraph, FooterLink} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <FooterParagraph>COVID 19 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).</FooterParagraph>
        <FooterParagraph>Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. While the majority of cases result in mild symptoms, some progress to acute respiratory distress syndrome (ARDS) possibly precipitated by cytokine storm, multi-organ failure, septic shock, and blood clots. The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days.</FooterParagraph>
        <FooterLink href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">HOW TO PROTECT YOURSELF & OTHERS</FooterLink>
        <FooterLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">WHO</FooterLink>
    </FooterContainer>
);

export default Footer;