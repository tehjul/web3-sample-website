import '../styles/Body.css';
import Header from './Header';
import Main from './Main';
import MintButton from './MintButton';

const Body = () => {
  return (
    <div className="body">
      <Header />
      <div className="delimiter"></div>
      <Main />
      <div className="delimiter"></div>
      <MintButton />
    </div>
  );
};

export default Body;