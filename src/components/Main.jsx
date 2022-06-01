import logo from '../assets/logo.svg';
import '../styles/Main.css';

const Main = () => {
  const totalSupply = 555;
  return (
    <div className="body">
      <div className="body-container">
        <div className="body-container-left">
          <h1>Tehjul project</h1>
          <p>Tehjul Project is a collection of 555 randomly generated NFTs on the Ethereum blockchain created by Tehjul.
            Each Tehjul is uniquely generated from 24 different rarity traits drawn by tehjul. Owning an NFT from the collection will allow you to get exclusive benefits.
          </p>
          <ul>
            <li>
              Common : 155 / {totalSupply} ({(155 / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Rare : 90 / {totalSupply} ({(90 / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Epic : 45 / {totalSupply} ({(45 / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Legendary : 15 / {totalSupply} ({(15 / totalSupply * 100).toFixed(2)}%)
            </li>
            <li>
              Mythical : 5 / {totalSupply} ({(5 / totalSupply * 100).toFixed(2)}%)
            </li>
          </ul>
        </div>
        <div className="body-container-right">
          <img src={logo} alt="Epic Mask" className="body-container-right-image" />
        </div>
      </div>
    </div>
  );
};

export default Main; 