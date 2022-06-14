import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import MintBody from './MintBody';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const commonSupply = 190;
  const rareSupply = 100;
  const epicSupply = 60;
  const legendarySupply = 30;
  const mythicalSupply = 10;
  const totalSupply = commonSupply + rareSupply + epicSupply + legendarySupply + mythicalSupply;

  const [activePage, setActivePage] = useState('');

  return (
    <div className="body">
      <Header activePage={activePage} setActivePage={setActivePage}/>
      <div className="delimiter"></div>
      <Main activePage={activePage} commonSupply={commonSupply} rareSupply={rareSupply} epicSupply={epicSupply} legendarySupply={legendarySupply} mythicalSupply={mythicalSupply} totalSupply={totalSupply} />
      <div className="delimiter"></div>
      <MintBody totalSupply={totalSupply} />
      <Footer />
    </div>
  );
}

export default App;
