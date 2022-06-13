import '../styles/MintButton.css';

const MintButton = () => {

  function mint() {
    alert('You are not on the whitelist');
  }

  return (
    <button className="mint-button" onClick={mint}>
      Mint
    </button>
  );
}

export default MintButton;