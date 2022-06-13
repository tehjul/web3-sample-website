import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import MintBody from './MintBody';
import Footer from './Footer';

function App() {
  const commonSupply = 190;
  const rareSupply = 100;
  const epicSupply = 60;
  const legendarySupply = 30;
  const mythicalSupply = 10;
  const totalSupply = commonSupply + rareSupply + epicSupply + legendarySupply + mythicalSupply;

  return (
    <div className="body">
      <Header />
      <div className="delimiter"></div>
      <Main commonSupply={commonSupply} rareSupply={rareSupply} epicSupply={epicSupply} legendarySupply={legendarySupply} mythicalSupply={mythicalSupply} totalSupply={totalSupply} />
      <div className="delimiter"></div>
      <MintBody totalSupply={totalSupply} />
      <Footer />
    </div>
  );
}

export default App;
