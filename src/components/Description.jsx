const Description = ({ commonSupply, rareSupply, epicSupply, legendarySupply, mythicalSupply, totalSupply }) => {

  function getPercentage(supply) {
    return ((supply / totalSupply) * 100).toFixed(2);
  }

  return (
    <div>
      <h1>Tehjul project</h1>
      <p>Tehjul Project is a collection of {totalSupply} randomly generated NFTs on the Ethereum blockchain created by Tehjul.
        Each Tehjul is uniquely generated from 24 different rarity traits drawn by tehjul. Owning an NFT from the collection will allow you to get exclusive benefits.
      </p>
      <ul>
        <li>
          Common : {commonSupply} ({getPercentage(commonSupply)}%)
        </li>
        <li>
          Rare : {rareSupply} ({getPercentage(rareSupply)}%)
        </li>
        <li>
          Epic : {epicSupply} ({getPercentage(epicSupply)}%)
        </li>
        <li>
          Legendary : {legendarySupply} ({getPercentage(legendarySupply)}%)
        </li>
        <li>
          Mythical : {mythicalSupply} ({getPercentage(mythicalSupply)}%)
        </li>
      </ul>
    </div>
  );
}

export default Description;
