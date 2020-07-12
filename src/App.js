import React, {useState} from 'react';
import './App.css';

import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';
import Footer from './components/footer/footer.component';

function App() {

  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <Header menu={menu} showMenu={showMenu}/>
      <Menu menu={menu}/>
      <Footer />
    </>
  );
}

export default App;
