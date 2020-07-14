import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';
import StatsPanel from './components/stats-panel/stats-panel.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/footer/footer.component';

import {Loader} from './components/loader/loader.styles';

function App() {

  const [isFetching, setFetching] = useState(true);
  const [data, setData] = useState(null);
  const [menu, setMenu] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  const showMenu = () => setMenu(!menu);
  const showSearchBox = () => setSearchBox(!searchBox);

  useEffect(() => {
    fetch('https://api.covid19api.com/world/total')
    .then(response => response.json())
    .then(data => {setData({stats: {confirmed: data.TotalConfirmed, recovered: data.TotalRecovered, deceased: data.TotalDeaths}, initialFetch: true}); setFetching(false);})
  }, []);

  return (
    <>
      <Header menu={menu} showMenu={showMenu}/>
      <Menu menu={menu} showSearchBox={showSearchBox}/>
      {
        searchBox ? (
          <SearchBox setData={setData} setFetching={setFetching} />
        ) : null
      }
      {
        isFetching ? (
          <Loader>RETRIEVING DATA...</Loader>
        ) : (
          <StatsPanel data={data} />
        )
      }
      <Footer />
    </>
  );
}

export default App;
