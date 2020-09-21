import React, {useState, useEffect} from 'react';

import GlobalStyle from './styles/global-style';

import {ReactComponent as Blob} from './assets/app-blob.svg';

import {AppContainer, AppHeader, Informations, AppFooter, FooterLinks, FooterLink} from './App.styles';

import StatsPanel from './components/stats-panel/stats-panel.component';
import SearchBox from './components/search-box/search-box.component';

function App() {

  const [isFetching, setFetching] = useState(true);
  const [data, setData] = useState({stats: {country: ""}, initialFetch: true});
  const {initialFetch, stats: {country}} = data;

  useEffect(() => {
    fetch('https://api.covid19api.com/world/total')
    .then(response => response.json())
    .then(data => {setData({stats: {confirmed: data.TotalConfirmed, recovered: data.TotalRecovered, deceased: data.TotalDeaths}, initialFetch: true}); setFetching(false);})
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeader>COVID-19 TRACKER</AppHeader>
      <SearchBox initialFetch={initialFetch} searchedCountry={country} setData={setData} setFetching={setFetching} />
      <StatsPanel isFetching={isFetching} data={data}/>
      <Informations>
        <Blob />
        <div>
          <p>COVID 19 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).</p>
          <p>Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. While the majority of cases result in mild symptoms, some progress to acute respiratory distress syndrome (ARDS) possibly precipitated by cytokine storm, multi-organ failure, septic shock, and blood clots. The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days.</p>
        </div>
      </Informations>
      <AppFooter>
        <FooterLinks>
            <FooterLink href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank" rel="noopener noreferrer">HOW TO PROTECT YOURSELF & OTHERS</FooterLink>
            <FooterLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">WHO</FooterLink>
            <FooterLink href="https://www.who.int/westernpacific/emergencies/covid-19/information/transmission-protective-measures" target="_blank" rel="noopener noreferrer">SAFETY TIPS</FooterLink>
            <FooterLink href="https://covid19api.com/" target="_blank" rel="noopener noreferrer">COVID-19 API</FooterLink>
        </FooterLinks>
      </AppFooter>
    </AppContainer>
  );
}

export default App;
