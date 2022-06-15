import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from "react";
import Roadmap from './Roadmap';
import Whitepaper from './Whitepaper';
import Team from './Team';

function App() {
  const commonSupply = 190;
  const rareSupply = 100;
  const epicSupply = 60;
  const legendarySupply = 30;
  const mythicalSupply = 10;
  const totalSupply = commonSupply + rareSupply + epicSupply + legendarySupply + mythicalSupply;

  const [activePage, setActivePage] = useState('home');

  let body;

  switch (activePage) {
    case 'home':
      body = <Main activePage={activePage} commonSupply={commonSupply} rareSupply={rareSupply} epicSupply={epicSupply} legendarySupply={legendarySupply} mythicalSupply={mythicalSupply} totalSupply={totalSupply} />;
      break;
    case 'roadmap':
      body = <Roadmap />;
      break;
    case 'whitepaper':
      body = <Whitepaper />;
      break;
    case 'team':
      body = <Team />;
      break;
    default:
      body = <div>bad request</div>;
  }

  return (
    <div className="body">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <div className='main-content'>
        {body}
      </div>
      <Footer />
    </div>
  );
}

export default App;
