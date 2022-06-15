import logo from '../assets/logo.svg';
import MintBody from './MintBody';
import Description from './Description';
import '../styles/Main.css';

const Main = ({ commonSupply, rareSupply, epicSupply, legendarySupply, mythicalSupply, totalSupply }) => {
  return (
    <div>
      <div className="body-container">
        <div className="body-container-left">
          <Description commonSupply={commonSupply} rareSupply={rareSupply} epicSupply={epicSupply} legendarySupply={legendarySupply} mythicalSupply={mythicalSupply} totalSupply={totalSupply} />
        </div>
        <div className="body-container-right">
          <img src={logo} alt="Epic Mask" className="body-container-right-image" />
        </div>
      </div>
      <div className="delimiter"></div>
      <MintBody totalSupply={totalSupply} />
    </div>
  );
};

export default Main; 