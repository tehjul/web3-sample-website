import MintButton from "./MintButton";
import Supply from "./Supply";
import '../styles/MintBody.css';

const MintBody = ({totalSupply}) => {
  return (
    <div className="mint-container">
        <MintButton />
        <Supply totalSupply={totalSupply} />
    </div>

  );
}

export default MintBody;
