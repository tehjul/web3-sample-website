import logo from '../assets/logo.svg';
import '../styles/Main.css';

const Main = ({ commonSupply, rareSupply, epicSupply, legendarySupply, mythicalSupply, totalSupply }) => {
  return (
      <div className="body-container">
        <div className="body-container-left">
          <h1>Tehjul project</h1>
          <p>Tehjul Project is a collection of {totalSupply} randomly generated NFTs on the Ethereum blockchain created by Tehjul.
            Each Tehjul is uniquely generated from 24 different rarity traits drawn by tehjul. Owning an NFT from the collection will allow you to get exclusive benefits.
          </p>
          <ul>
            <li>
              Common : {commonSupply} / {totalSupply} ({(commonSupply / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Rare : {rareSupply} / {totalSupply} ({(rareSupply / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Epic : {epicSupply} / {totalSupply} ({(epicSupply / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Legendary : {legendarySupply} / {totalSupply} ({(legendarySupply / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Mythical : {mythicalSupply} / {totalSupply} ({(mythicalSupply / totalSupply * 100).toFixed(2)}%)
            </li>
          </ul>
        </div>
        <div className="body-container-right">
          <img src={logo} alt="Epic Mask" className="body-container-right-image" />
        </div>
      </div>
  );
};

export default Main; 